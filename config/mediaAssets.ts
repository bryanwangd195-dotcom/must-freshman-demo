/**
 * 網站媒體資產總表
 *
 * 維護方式：
 * - 所有圖片先放進 public/，再於此檔登錄相對路徑與替代文字。
 * - 搬移到校內子目錄時，不需逐頁修改；assetPath() 會套用部署 basePath。
 * - 替換圖片時，建議沿用既有檔名，可避免修改畫面程式。
 * - public/mascot/README.md 另有每張圖片的用途與建議尺寸。
 */

export interface MediaAsset {
  path: string;
  alt: string;
  usage: string;
  recommendedSize: string;
}

export const MEDIA_ASSETS = {
  hero: {
    path: "/mascot/humanities.png",
    alt: "明新新生公仔向你打招呼",
    usage: "首頁歡迎區主視覺",
    recommendedSize: "透明 PNG，建議高度至少 900px",
  },
  faq: {
    path: "/mascot/engineering.png",
    alt: "明新公仔協助解答新生問題",
    usage: "新生常見問題區塊",
    recommendedSize: "透明 PNG，建議高度至少 600px",
  },
} satisfies Record<string, MediaAsset | MediaAsset[]>;

/** GitHub Pages 或校內子目錄部署時，自動補上網站根路徑。 */
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
