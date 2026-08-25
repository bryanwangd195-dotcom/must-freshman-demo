import { SITE_CONTENT } from "@/config/siteContent";

/**
 * 全站頁尾
 * - 大學名稱、平台名稱、地址／總機提示：src/config/siteContent.ts → brand、footer
 * - 正式校網、招生、隱私權等連結：src/config/links.ts（目前 Prototype 尚未顯示）
 */
export function SiteFooter() {
  return (
    <footer>
      <div className="brand">
        <span className="logo">M</span>
        <span><b>{SITE_CONTENT.brand.universityName}</b><small>{SITE_CONTENT.brand.platformName}</small></span>
      </div>
      <p>{SITE_CONTENT.footer.placeholder}</p>
      <small>{SITE_CONTENT.footer.copyright}</small>
    </footer>
  );
}
