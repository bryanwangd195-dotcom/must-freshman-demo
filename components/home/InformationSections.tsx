import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { externalLinkProps } from "@/config/links";
import { assetPath, MEDIA_ASSETS } from "@/config/mediaAssets";
import { SITE_CONTENT } from "@/config/siteContent";
import { faqs } from "@/data/content";
import type { Contact } from "@/types";

/**
 * 區段 03：校園生活常用入口
 * - 呈現方式沿用原「常用服務」圖文卡片。
 * - 六張卡片文字、圖示與網址對照：src/config/siteContent.ts → campusLife.cards
 * - 實際網址唯一來源：src/config/links.ts
 * - 本區不直接使用公仔圖片；FAQ 與 Hero 圖片仍由 src/config/mediaAssets.ts 管理。
 */
export function CampusLife() {
  const content = SITE_CONTENT.campusLife;
  return (
    <section className="services campusServices" id="life">
      <div className="flowHeading sectionNumberHeading">
        <span className="bigStep">{content.step}</span>
        <div><span className="kicker">{content.kicker}</span><h2>{content.title}</h2><p>{content.description}</p></div>
      </div>
      <div className="serviceGrid campusServiceGrid">
        {content.cards.map((card) => (
          <a href={card.href} key={card.title} {...externalLinkProps(card.href)}>
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
 * 區段 04：FAQ
 * - 區段標題：src/config/siteContent.ts → faq
 * - 問題與答案：src/data/content.ts → faqs
 * - FAQ 依 category 分組；answer 每一項顯示成一個條列。
 * - links 放官方補充頁；owner 記錄負責確認答案的單位。
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
          <div key={faq.question}>
            <button onClick={() => onFaqToggle(index)} aria-expanded={openFaq === index}>
              <b>
                <span>Q{String(index + 1).padStart(2, "0")}</span>
                <span className="faqCategory">{faq.category}</span>
                {faq.question}
              </b>
              <span>{openFaq === index ? "−" : "+"}</span>
            </button>
            {openFaq === index && (
              <div className="faqAnswer">
                <ul>{faq.answer.map((line) => <li key={line}>{line}</li>)}</ul>
                {faq.links && (
                  <div className="faqLinks">
                    {faq.links.map((link) => (
                      <a href={link.url} key={link.url} {...externalLinkProps(link.url)}>{link.label} <ArrowRight /></a>
                    ))}
                  </div>
                )}
                <small>資料確認單位：{faq.owner}</small>
              </div>
            )}
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
