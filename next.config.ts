import type { NextConfig } from "next";

/**
 * 部署路徑優先順序：
 * 1. 校內主機可設定 NEXT_PUBLIC_SITE_BASE_PATH，例如 /freshman。
 * 2. GitHub Actions 會自動使用 /repository-name。
 * 3. 本機或網站根目錄部署則使用空字串。
 */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && repositoryName.length > 0;
const configuredBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH?.trim();
const normalizedBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";
const basePath = normalizedBasePath || (isGitHubPages ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  // 產生 out/ 靜態網站，可部署到 Apache、Nginx、IIS 或 GitHub Pages。
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  // 純靜態主機沒有 Next.js 圖片處理伺服器，因此停用執行期最佳化。
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
