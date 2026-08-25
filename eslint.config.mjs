import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  {
    // 交付包、預建置網站與 Excel 產生工具都不是前端原始碼，避免重複檢查編譯後檔案。
    ignores: [".next/**", "out/**", "node_modules/**", "handoff/**", "outputs/**", "spreadsheet_build/**"],
  },
  ...nextVitals,
  ...nextTs,
];
export default config;
