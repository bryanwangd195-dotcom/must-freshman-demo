# 明新新生智慧導航平台｜GitHub 測試版

本資料夾配合目前 GitHub Repository 的根目錄結構。請把本資料夾內的內容上傳到 Repository 最上層，覆蓋同名檔案。

> 為了與之後交付電算中心的標準 `src/` 封包保持一致，部分程式註解仍寫成 `src/config/...`；在目前 GitHub 根目錄測試版中，直接對應為 `config/...`，其餘資料夾同理。

## 最常修改的位置

| 修改內容 | 檔案 |
|---|---|
| 學年度、區段編號、標題與說明 | `config/siteContent.ts` |
| 所有正式網址 | `config/links.ts` |
| 必辦程序、日期、適用身分與操作步驟 | `data/tasks.ts` |
| 必辦／依情況辦理規則 | `data/taskRules.ts` |
| FAQ 分類、答案、連結名稱與資料確認單位 | `data/content.ts` |
| 學校總機、各單位分機與 FAQ 聯絡窗口 | `data/contacts.ts` |
| 圖片路徑與用途 | `config/mediaAssets.ts` |
| 圖片原始檔 | `public/mascot/` |

## 區段元件

- 首頁主視覺：`components/home/Hero.tsx`
- 01 必辦流程、02 依情況辦理：`components/home/TaskSections.tsx`
- 03 校園生活、04 FAQ：`components/home/InformationSections.tsx`
- 頁首導覽：`components/home/SiteHeader.tsx`
- 頁面組裝：`components/Home.tsx`

## 網址修改原則

- 網址一律集中在 `config/links.ts`。
- `data/tasks.ts` 與 `data/content.ts` 只引用 `SITE_LINKS`，不要重複貼相同網址。
- 未取得正式選課網址前保持空白，前台會顯示「網址待確認」。
- 正式上線前需逐一點擊確認，並由資料負責單位留下確認紀錄。

## GitHub Pages 驗證

```bash
npm ci
npm run lint
npm run build
```

靜態網站輸出於 `out/`；GitHub Actions workflow 位於 `.github/workflows/deploy-pages.yml`。

> Repository 內若仍有舊的 `src/` 資料夾，本版 `tsconfig.json` 會先忽略它，避免舊檔干擾根目錄版本建置。
