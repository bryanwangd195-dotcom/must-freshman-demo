import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { assetPath, MEDIA_ASSETS } from "@/config/mediaAssets";
import { SITE_CONTENT } from "@/config/siteContent";

/**
 * 首頁歡迎主視覺
 *
 * 維護索引：
 * - 學年度、標題、說明、按鈕文字：src/config/siteContent.ts → hero
 * - 主視覺圖片：src/config/mediaAssets.ts → hero
 * - 第一個按鈕固定前往 #journey（02 必辦流程）。
 * - 第二個按鈕固定前往 #life（04 校園生活）。
 *
 * 本版已依需求移除「01 確認新生身分」與身分證查詢介面。
 */
export function Hero() {
  const hero = SITE_CONTENT.hero;

  return (
    <section className="hero">
      <div className="blob b1" />
      <div className="blob b2" />

      <div className="heroText">
        <span className="eyebrow">
          <Sparkles size={16} /> {SITE_CONTENT.academicYear} {hero.eyebrowSuffix}
        </span>
        <h1>{hero.title}<br /><em>{hero.highlightedTitle}</em></h1>
        <p>{hero.description}</p>
        <div className="heroButtons">
          <a className="button primary" href="#journey">{hero.primaryAction} <ArrowRight /></a>
          <a className="button ghost" href="#life">{hero.secondaryAction}</a>
        </div>
      </div>

      <div className="heroArt">
        <div className="sun">HELLO!</div>
        <Image
          src={assetPath(MEDIA_ASSETS.hero.path)}
          alt={MEDIA_ASSETS.hero.alt}
          width={420}
          height={520}
          priority
        />
        <div className="sticker s1">{hero.stickerPrimary.split("｜").map((line, index) => index ? <b key={line}>{line}</b> : <span key={line}>{line}<br /></span>)}</div>
        <div className="sticker s2">{hero.stickerSecondary.split("｜").map((line) => <span key={line}>{line}<br /></span>)}</div>
      </div>
    </section>
  );
}
