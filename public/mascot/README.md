# 公仔與媒體資產清單

此資料夾集中存放首頁使用的校方公仔。搬移網站或替換素材時，請先確認 `src/config/mediaAssets.ts`。

| 檔名 | 目前用途 | 建議格式 |
|---|---|---|
| `humanities.png` | 首頁 Hero 主視覺 | 透明 PNG，直式，高度至少 900px |
| `engineering.png` | FAQ 圖片 | 透明 PNG |
| `semiconductor.png` | 本版前台未顯示，保留作為後續視覺素材 | 透明 PNG |
| `human-ecology.png` | 本版前台未顯示，保留作為後續視覺素材 | 透明 PNG |
| `management.png` | 本版前台未顯示，保留作為後續視覺素材 | 透明 PNG |

維護原則：

- 優先使用英文小寫檔名，避免校內主機或部署工具發生編碼問題。
- 替換同名檔案不需要修改程式碼。
- 若新增檔名，必須同步登錄至 `src/config/mediaAssets.ts`。
- 所有圖片必須提供可理解的 `alt` 替代文字。
- 正式上線前建議轉為 WebP／AVIF，並保留 PNG 原始檔供後續設計使用。
