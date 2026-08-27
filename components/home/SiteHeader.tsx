import { Menu, Search, X } from "lucide-react";
import { externalLinkProps } from "@/config/links";
import { SITE_CONTENT } from "@/config/siteContent";

interface SiteHeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
}

/**
 * 全站頁首
 * - 導覽項目、文字與網址：src/config/siteContent.ts → navigation / brand
 * - 外部網址會在新分頁開啟，並自動加入安全屬性。
 * - 搜尋目前只保留 UI；正式搜尋服務應由圖資中心決定索引來源。
 */
export function SiteHeader({ menuOpen, onMenuToggle }: SiteHeaderProps) {
  return (
    <header className="header">
      <a className="brand" href="#top">
        <span className="logo">M</span>
        <span>
          <b>{SITE_CONTENT.brand.shortName}</b>
          <small>{SITE_CONTENT.brand.englishName}</small>
        </span>
      </a>

      <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
        {SITE_CONTENT.navigation.map((item) => (
          <a href={item.href} key={item.href} {...externalLinkProps(item.href)}>{item.label}</a>
        ))}
      </nav>

      <div className="headerActions">
        <button className="iconButton" aria-label="搜尋"><Search /></button>
        <button className="menuButton" onClick={onMenuToggle} aria-label="開啟選單">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
