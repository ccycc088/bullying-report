# 安心通 — 校園霸凌通報系統

## 部署步驟

### 1. 取得 Google Gemini API 金鑰
前往 https://aistudio.google.com/apikey（或 Google AI Studio）建立 API 金鑰。

### 2. 上傳到 Vercel
1. 前往 https://vercel.com，用 GitHub 帳號登入
2. 點右上角「Add New → Project」
3. 選「Upload」（直接上傳資料夾，不需要 GitHub）
4. 把這整個 `bullying-report` 資料夾拖進去
5. 點「Deploy」

### 3. 設定 API 金鑰（重要）
部署完成後：
1. 進入 Vercel 專案頁面
2. 點上方「Settings」→「Environment Variables」
3. 新增一筆：
   - Name：`GEMINI_API_KEY`（必須與程式碼一致，勿使用其他名稱）
   - Value：你的 Gemini API 金鑰
4. 點「Save」
5. 回到「Deployments」，點最新一筆右側「⋯」→「Redeploy」

### 4. 完成
Vercel 會給你一個網址（如 https://bullying-report.vercel.app）
用任何瀏覽器打開就能用，AI 整理功能也會正常運作。

---

## 檔案結構

```
bullying-report/
├── index.html            # 網站主頁面（專案根目錄，供 Vercel 靜態託管）
├── api/
│   └── ai-organize.js    # AI 整理後端（保護 API 金鑰）
└── README.md             # 本文件
```

## 語音輸入
語音輸入使用瀏覽器內建 Web Speech API，建議使用 Chrome 瀏覽器，完全免費不需額外設定。
