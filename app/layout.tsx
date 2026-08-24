import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"明新新鮮人｜明新科技大學新生一站式入口",description:"明新科技大學新生入學智慧導航，整合註冊、繳費、宿舍、選課、健康檢查、新生定向、校園生活及行政聯絡資訊。"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-Hant"><body>{children}</body></html>}
