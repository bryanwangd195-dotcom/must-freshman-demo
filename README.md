# 明新新生智慧導航平台｜圖資中心交付版

本專案是明新科技大學新生入口 Prototype，採 Next.js App Router、React 與 TypeScript。網站目前以靜態匯出方式建置，可部署到 GitHub Pages、Apache、Nginx、IIS 或校內既有靜態網站空間。

> 目前所有日期、正式網址、電話、承辦人與申請資格仍是待確認資料，不可直接視為正式校務資訊。

## 快速開始

建議環境：Node.js 24、npm 11 或圖資中心核准的 LTS 版本。

```bash
npm ci
npm run dev
npm run lint
npm run build
```

- 開發網址：`http://localhost:3000`
- 靜態輸出：`out/`
- `npm run build` 必須成功後才能交付部署。

## 最常修改的位置

| 要修改的內容 | 檔案 |
|---|---|
| 學年度、首頁標題、區塊說明與按鈕文字 | `src/config/siteContent.ts` |
| 所有正式網址（頁首、任務、FAQ、校園生活） | `src/config/links.ts` |
| 圖片路徑、替代文字與使用位置 | `src/config/mediaAssets.ts` |
| 圖片原始檔 | `public/mascot/` |
| 學生身分類別 | `src/data/studentTypes.ts` |
| 招生管道 | `src/data/admissionTypes.ts` |
| 任務名稱、說明、日期、適用身分與操作步驟 | `src/data/tasks.ts` |
| 哪個身分必辦／條件辦理／不適用 | `src/data/taskRules.ts` |
| 總機、單位分機及任務承辦窗口 | `src/data/contacts.ts` |
| 新生常見問題 | `src/data/content.ts` |

## 首頁元件位置

| 畫面區段 | 元件檔案 |
|---|---|
| 頁首導覽 | `src/components/home/SiteHeader.tsx` |
| 首頁歡迎主視覺 | `src/components/home/Hero.tsx` |
| 01 必辦流程、02 依情況辦理 | `src/components/home/TaskSections.tsx` |
| 03 校園生活入口、04 FAQ、聯絡資訊 | `src/components/home/InformationSections.tsx` |
| 頁尾 | `src/components/home/SiteFooter.tsx` |
| 互動狀態與頁面組裝 | `src/components/Home.tsx` |

每個元件檔案頂端均有中文維護註解，說明該區的文字、網址、圖片與資料來源。

## 新增或修改任務

1. 在 `src/data/tasks.ts` 新增或修改任務。
2. 在 `src/config/links.ts` 建立或修改正式網址，再由任務引用該網址。
3. `displayDate` 填前台日期文字；`applicableTo` 填適用身分；`steps` 每一項顯示一個操作步驟。
4. `contactId` 必須存在於 `src/data/contacts.ts`。
5. 在 `src/data/taskRules.ts` 設定每個身分的 requirement。
6. 將 `verificationStatus` 改為 `confirmed` 前，必須保留資料負責單位的確認紀錄。
7. 執行 `npm run lint` 與 `npm run build`。

## 圖片維護

1. 圖片放入 `public/mascot/`。
2. 在 `src/config/mediaAssets.ts` 登錄路徑、alt、用途及建議尺寸。
3. 若沿用原檔名直接替換，畫面程式不需修改。
4. 校內子目錄部署時，`assetPath()` 會自動補上 base path。

## 校內子目錄部署

建立 `.env.production`：

```env
NEXT_PUBLIC_SITE_BASE_PATH=/freshman
NEXT_PUBLIC_SITE_URL=https://www.must.edu.tw/freshman
```

執行：

```bash
npm ci
npm run build
```

將 `out/` 完整內容部署至對應的 `/freshman/` 靜態網站目錄。詳細流程見 `docs/02-校內移植與部署.md`。

## 文件索引

- `docs/01-維護導覽.md`：文字、網址、圖片與資料檔修改地圖。
- `docs/02-校內移植與部署.md`：Apache／Nginx／IIS、子目錄與嵌入策略。
- `docs/03-資料治理與權限.md`：資料負責人、審核流程與後台角色建議。
- `docs/04-圖資中心測試清單.md`：功能、安全、相容性與上線檢核。
- `docs/05-行政資料填報欄位.md`：行政單位應提供的欄位與填報規則。

## Prototype 限制

- 無 SSO、CMS 或正式學生資料庫。
- 本版不提供身分選擇或身分證查詢；首頁先呈現新生共通流程。
- 本版已移除 AI 小幫手；學生疑問改由 FAQ 與頁面下方聯絡資訊協助分流。
- 如未來恢復分眾，應由校內 SSO／招生 API 提供身分，不應由前端猜測或保存個資。
- 正式網址、日期、聯絡方式與規則均待行政單位確認。
