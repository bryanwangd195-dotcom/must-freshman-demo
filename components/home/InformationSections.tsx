import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { externalLinkProps, SITE_LINKS } from "@/config/links";
import { assetPath, MEDIA_ASSETS } from "@/config/mediaAssets";
import { SITE_CONTENT } from "@/config/siteContent";
import { faqs } from "@/data/content";
import type { Contact } from "@/types";

/**
 * 區段 04：校園生活常用入口
 * - 呈現方式沿用原「常用服務」圖文卡片。
 * - 六張卡片文字與圖示：src/config/siteContent.ts → campusLife.cards
 * - 六個網址：src/config/links.ts → calendar / campusMap / clubs / dining / instagram / facebook
 * - 本區不直接使用公仔圖片；FAQ 與 Hero 圖片仍由 src/config/mediaAssets.ts 管理。
 */
export function CampusLife() {
  const content = SITE_CONTENT.campusLife;
  const links = [
    SITE_LINKS.calendar,
    SITE_LINKS.campusMap,
    SITE_LINKS.clubs,
    SITE_LINKS.dining,
    SITE_LINKS.instagram,
    SITE_LINKS.facebook,
  ];
  return (
    <section className="services campusServices" id="life">
      <div className="flowHeading sectionNumberHeading">
        <span className="bigStep">{content.step}</span>
        <div><span className="kicker">{content.kicker}</span><h2>{content.title}</h2><p>{content.description}</p></div>
      </div>
      <div className="serviceGrid campusServiceGrid">
        {content.cards.map((card, index) => (
          <a href={links[index]} key={card.title} {...externalLinkProps(links[index])}>
            <span aria-hidden="true">{card.icon}</span>
            <div><b>{card.title}</b><small>{card.subtitle}</small></div>
            <ArrowRight />
          </a>
        ))}
      </div>
    </section>
  );
}

interface FaqSectionProps { openFaq: number | null; onFaqToggle: (index: number) => void; }

/**
 * FAQ 區
 * - 區段標題：src/config/siteContent.ts → faq
 * - 問題與答案：src/data/content.ts → faqs
 * - 正式上線前，每一題應指定資料負責單位及最後確認日期。
 */
export function FaqSection({ openFaq, onFaqToggle }: FaqSectionProps) {
  const content = SITE_CONTENT.faq;
  return (
    <section className="section faqSection" id="faq">
      <div className="faqIntro">
        <span className="faqStep">{content.step}</span>
        <span className="kicker">{content.kicker}</span><h2>{content.title}</h2><p>{content.description}</p>
        <Image src={assetPath(MEDIA_ASSETS.faq.path)} alt={MEDIA_ASSETS.faq.alt} width={180} height={210} />
      </div>
      <div className="faq">
        {faqs.map((faq, index) => (
          <div key={faq[0]}>
            <button onClick={() => onFaqToggle(index)} aria-expanded={openFaq === index}>
              <b><span>Q{String(index + 1).padStart(2, "0")}</span>{faq[0]}</b><span>{openFaq === index ? "−" : "+"}</span>
            </button>
            {openFaq === index && <p>{faq[1]}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * 聯絡資訊區
 * - 聯絡資料唯一來源：src/data/contacts.ts
 * - 目前使用第一筆作為網站共同窗口；任務詳細頁未來應依 contactId 顯示各自承辦人。
 */
export function ContactSection({ contact }: { contact: Contact }) {
  const content = SITE_CONTENT.contact;
  return (
    <section className="contact" id="contact">
      <div><span>{content.eyebrow}</span><h2>{content.title}</h2><p>{content.description}</p></div>
      <div><b>{contact.department}</b><span>承辦人：{contact.name}</span><span>電話：{contact.phone}</span><span>Email：{contact.email}</span></div>
    </section>
  );
}
