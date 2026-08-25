import type { Metadata } from "next";
import "./globals.css";

/** 搜尋引擎與分享預覽文字；正式網址確認後可再加入 canonical、Open Graph 圖片。 */
export const metadata: Metadata = {
  title: "明新新鮮人｜明新科技大學新生一站式入口",
  description: "明新科技大學新生入學智慧導航，整合註冊、繳費、宿舍、選課、健康檢查、新生定向、校園生活及行政聯絡資訊。",
};

/** 全站根版型。若未來加入校方共用頁首或分析工具，應從此處整合。 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
