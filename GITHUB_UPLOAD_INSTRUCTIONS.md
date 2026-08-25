# GitHub 根目錄版更新說明

這份更新專門配合目前 Repository 的根目錄結構：`app/`、`components/`、`data/`、`lib/`、`types/` 都直接位於最上層。

## 上傳方式

1. 在 GitHub Repository 的 Code 頁面選擇 `Add file` → `Upload files`。
2. 將本資料夾「裡面的所有檔案與資料夾」拖入上傳區，不要只上傳外層資料夾。
3. 確認清單中能看到 `app/page.tsx`、`components/Home.tsx`、`config/siteContent.ts` 與 `tsconfig.json`。
4. Commit 訊息可填：`Fix root layout and update homepage sections`。
5. Commit 後到 Actions 等待 Pages workflow 顯示綠色勾勾，再重新整理網站。

## 為什麼需要這一版

先前上傳的 `src/` 沒有覆蓋 Repository 既有的根目錄 `app/`，因此正式部署仍可能使用舊入口。本版直接更新根目錄程式，並讓 TypeScript 忽略殘留的 `src/`，不需要先在 GitHub 逐檔刪除。
