function readJsonBody(req) {
  const raw = req.body;
  if (raw == null) return {};
  if (typeof raw === 'object' && !Buffer.isBuffer(raw)) return raw;
  const s = Buffer.isBuffer(raw) ? raw.toString('utf8') : String(raw);
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}

async function readBody(req) {
  let body = readJsonBody(req);
  if (body?.text != null && String(body.text).trim().length >= 5) return body;
  if (typeof req.body === 'string' && req.body.length > 0) {
    try {
      const p = JSON.parse(req.body);
      if (p?.text != null) return p;
    } catch { /* ignore */ }
  }
  return body;
}

function parseModelJson(raw) {
  const t = (raw || '').replace(/```json\s*/gi, '').replace(/```/g, '').trim();
  try {
    return JSON.parse(t);
  } catch {
    const start = t.indexOf('{');
    const end = t.lastIndexOf('}');
    if (start >= 0 && end > start) {
      return JSON.parse(t.slice(start, end + 1));
    }
  }
  throw new Error('MODEL_JSON');
}

async function generateOnce(apiKey, model, prompt, useJsonMime) {
  const generationConfig = { temperature: 0.2, maxOutputTokens: 2048 };
  if (useJsonMime) generationConfig.responseMimeType = 'application/json';
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig })
    }
  );
  const data = await response.json();
  return { response, data };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, full } = await readBody(req);
  if (!text || String(text).trim().length < 5) {
    return res.status(400).json({ error: '描述內容太短' });
  }

  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return res.status(500).json({ error: '伺服器未設定 API 金鑰' });

  const isFullAnalysis = full !== false;

  const prompt = isFullAnalysis
    ? `你是一位協助處理校園霸凌通報的專業系統。請根據以下學生的口語描述，進行完整分析。

請嚴格以下面的 JSON 格式回覆，不要有任何其他文字或 markdown：
{
  "formal": "將口語改寫為正式、客觀的書面敘述（繁體中文，第三人稱，去除口語，整理時間線，保留所有重要細節）",
  "types": ["從以下選出符合的類型（可複選）：肢體霸凌、言語霸凌、網路霸凌、關係霸凌、財物勒索、其他"],
  "emotions": ["從以下選出描述中透露的情緒（可複選）：害怕、焦慮、難過、憤怒、羞恥"],
  "emotionDesc": "一句話說明情緒狀態分析",
  "severity": "根據描述判斷嚴重程度，從 low / mid / high / crit 四選一",
  "severityDesc": "一到兩句說明判斷嚴重程度的理由",
  "suggestions": ["3到4條給輔導老師的具體處理建議，每條一句話"]
}

學生描述：
${text}`
    : `你是一位協助處理校園霸凌通報的系統。請根據以下學生口語描述完成：
1. 改寫為正式書面敘述（繁中，第三人稱，去除口語，保留細節）
2. 選出事件類型（可複選）：肢體霸凌、言語霸凌、網路霸凌、關係霸凌、財物勒索、其他

僅回覆 JSON，不含其他文字：
{"formal":"...","types":["..."]}

學生描述：
${text}`;

  const models = [
    'gemini-3-flash-preview',
    'gemini-2.0-flash',
    'gemini-1.5-flash'
  ];

  try {
    let lastGemini = null;

    for (const m of models) {
      for (const useJsonMime of [true, false]) {
        const { response, data } = await generateOnce(apiKey, m, prompt, useJsonMime);
        lastGemini = data;
        if (!response.ok) {
          if (data?.error?.status === 'NOT_FOUND' || data?.error?.code === 404) {
            break; // 試下一個模型
          }
          console.error('Gemini error:', data);
          return res.status(502).json({ error: 'AI 服務暫時無法使用，請稍後再試' });
        }

        if (data.promptFeedback?.blockReason) {
          return res.status(502).json({ error: '內容無法通過安全檢查，請刪減敏感細節後再試' });
        }

        const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (!raw.trim()) continue;

        try {
          const parsed = parseModelJson(raw);
          return res.status(200).json(parsed);
        } catch (e) {
          if (e.message === 'MODEL_JSON' && useJsonMime) continue;
          return res.status(502).json({ error: 'AI 回覆格式異常，請稍後再試' });
        }
      }
    }

    console.error('Gemini exhausted models:', lastGemini);
    return res.status(502).json({ error: 'AI 服務暫時無法使用，請稍後再試' });
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: '整理失敗，請稍後再試' });
  }
};
