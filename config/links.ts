/**
 * 非任務型連結總表
 *
 * 任務的「立即辦理」與「詳細說明」網址請至 src/data/tasks.ts 修改。
 * 本檔只放全站共用、校園生活或 Footer 等固定連結。
 */
export const SITE_LINKS = {
  calendar: "#contact",
  campusMap: "#contact",
  learningResources: "#contact",
  dining: "#contact",
  clubs: "#contact",
  instagram: "#contact",
  facebook: "#contact",
  universityHome: "#contact",
  admissions: "#contact",
  privacy: "#contact",
  sitemap: "#contact",
  contact: "#contact",
} as const;

/** 外部網址統一加上的安全屬性。 */
export const externalLinkProps = (url: string) =>
  url.startsWith("http") ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
