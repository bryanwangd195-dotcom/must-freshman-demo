/**
 * 非任務型連結總表
 *
 * 任務的「立即辦理」與「詳細說明」網址請至 src/data/tasks.ts 修改。
 * 本檔只放全站共用、校園生活或 Footer 等固定連結。
 */
export const SITE_LINKS = {
  // 頁首與重要公告
  importantSchedule: "https://admin.must.edu.tw/news/page.aspx?UnitID=1255&id=31755",

  // 01 必辦流程與 FAQ 共用系統
  newStudentRegistration: "https://exam.must.edu.tw/registration/",
  studentServices: "https://sss.must.edu.tw/",
  financeOffice: "https://admin.must.edu.tw/index.aspx?UnitID=75",
  tuitionSystem: "https://sss.must.edu.tw/tuiRegistry/tuiRegistry_index.asp",
  creditCardGuide: "https://admin.must.edu.tw/news/page.aspx?UnitID=75&id=28331",
  courseSelection: "https://admin.must.edu.tw/news/page.aspx?UnitID=82&id=31553",
  orientation: "https://admin.must.edu.tw/news/page.aspx?UnitID=1255&id=31595",
  healthCheck: "https://admin.must.edu.tw/view/content.aspx?UnitID=89&id=7218&tp=menu",

  // 02 依情況辦理
  tuitionReduction: "https://admin.must.edu.tw/view/content.aspx?UnitID=1255&tp=content&id=12889",
  studentLoan: "https://admin.must.edu.tw/news/page.aspx?UnitID=1255&id=31597",
  dorm: "https://admin.must.edu.tw/news/page.aspx?UnitID=1255&id=31099",
  parking: "https://admin.must.edu.tw/view/content.aspx?UnitID=96&id=4573&tp=content",

  // 03 校園生活
  calendar: "https://www.must.edu.tw/calendar.php",
  campusMap: "https://admin.must.edu.tw/view/content.aspx?UnitID=96&id=3601&tp=content",
  learningResources: "#contact",
  dining: "https://admin.must.edu.tw/news/page.aspx?UnitID=96&id=31811",
  clubs: "https://actss.must.edu.tw/MingStdAssocD/main.aspx",
  instagram: "https://www.instagram.com/mustminghsin/",
  facebook: "https://www.facebook.com/mustminghsin/?locale=zh_TW",
  universityHome: "#contact",
  admissions: "#contact",
  privacy: "#contact",
  sitemap: "#contact",
  contact: "#contact",
} as const;

/** 外部網址統一加上的安全屬性。 */
export const externalLinkProps = (url: string) =>
  url.startsWith("http") ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
