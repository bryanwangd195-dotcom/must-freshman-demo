# MUST Smart Freshman Navigator

明新科技大學新生智慧導航平台第一版 Prototype。此版本為資料驅動的首頁展示，正式日期、URL 與聯絡資訊尚待行政單位確認。

## Installation / Development / Build

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Folder Structure

- `src/app`：Next.js App Router 與全域樣式
- `src/components`：頁面與互動元件
- `src/data`：身分、任務、規則、聯絡人與內容資料
- `src/lib`：身分篩選與任務狀態邏輯
- `src/types`：共用型別
- `public/mascot`：可替換的公仔圖檔

## 維護資料

- 新增身分：編輯 `src/data/studentTypes.ts`，並在 `taskRules.ts` 加入規則。
- 新增任務／修改 URL／日期：編輯 `src/data/tasks.ts`。
- 修改聯絡人：編輯 `src/data/contacts.ts`，保持 `contactId` 對應。
- 新增 FAQ、公告、事件：編輯 `src/data/content.ts`。
- 替換公仔：覆蓋 `public/mascot` 中同名圖片，版面不需修改。
- 修改 Task Rule：使用 `required`、`conditional`、`optional` 或 `not_applicable`。

## Future AI API

目前 AI 面板採本機關鍵字與統一任務資料。未來可在 `src/lib` 新增 `assistantService.ts` 對接 RAG／LLM API，介面只需將 `ask` 函式改接服務層。密鑰應存放於 `.env.local`，不可提交版本控制。

## GitHub Pages Demo

本專案已設定為 Next.js 靜態匯出。執行 `npm run build` 後，可部署的網站會產生在 `out/`。

1. 在 GitHub 建立新的 repository。
2. 將本專案推送到 repository 的 `main` 分支。
3. 進入 repository 的 **Settings → Pages**。
4. 將 **Source** 設為 **GitHub Actions**。
5. 開啟 **Actions**，等待 `Deploy MUST Freshman Demo to GitHub Pages` 完成。
6. 部署網址通常為 `https://你的帳號.github.io/repository名稱/`。

Workflow 會自動執行 lint、靜態建置及部署。若 repository 名稱改變，建置時會自動產生相對應的 `basePath`，不需要手動修改圖片路徑。
