/**
 * GitHub 網頁上傳相容檔
 *
 * GitHub 的「Upload files」只會新增或覆蓋檔案，不會刪除儲存庫內的舊檔。
 * AI 小幫手已從 Home.tsx 移除，本檔僅用來覆蓋舊版 Assistant.tsx，
 * 避免舊程式繼續引用已移除的設定而造成 TypeScript 建置失敗。
 *
 * 本元件沒有被首頁引用，也不會輸出任何畫面。
 */
export function Assistant() {
  return null;
}
