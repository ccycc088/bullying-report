export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, full } = req.body;
  if (!text || text.trim().length < 5) {
    return res.status(400).json({ error: '描述內容太短' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
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

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Anthropic error:', data);
      return res.status(502).json({ error: 'AI 服務暫時無法使用，請稍後再試' });
    }

    const raw = data.content?.[0]?.text || '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);
    return res.status(200).json(parsed);
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: '整理失敗，請稍後再試' });
  }
}
