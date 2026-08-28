import { SITE_LINKS } from "@/config/links";
import type { ContactDirectoryKey } from "@/data/contacts";

/**
 * FAQ 資料格式
 *
 * 維護方式：
 * - category：畫面上的問題分類，也是行政彙整時的分組依據。
 * - question：學生看到的問題，盡量使用日常用語。
 * - answer：每一個陣列元素會顯示成一個條列，避免答案擠成長段落。
 * - links：官方補充資料；label 是學生看得懂的連結名稱。
 * - owner：負責確認答案的業務單位，不一定顯示承辦人姓名。
 */
export interface FaqItem {
  category: "入學流程" | "健康檢查" | "新生定向";
  question: string;
  answer: string[];
  links?: { label: string; url: string }[];
  owner: string;
  contactKey?: ContactDirectoryKey;
}

export const faqs: FaqItem[] = [
  {
    category: "入學流程",
    question: "錄取後，我第一件要做什麼？",
    answer: [
      "請從 01 必辦流程的第 1 項開始，依照畫面順序完成。",
      "每張卡片都會標示辦理日期、適用身分與官方入口，先確認自己是否符合再前往辦理。",
    ],
    owner: "新生資訊總窗口",
  },
  {
    category: "入學流程",
    question: "新生學號怎麼查？校務帳號怎麼啟用？",
    answer: [
      "先到網路報到系統查詢新生學號。",
      "進入學生服務系統後，點選「新生申請密碼」。",
      "依序填寫欄位，設定最多 10 個英數字的密碼。",
      "最後按下「申請／重置」，即可完成帳號啟用。",
    ],
    links: [
      { label: "查詢新生學號", url: SITE_LINKS.newStudentRegistration },
      { label: "前往學生服務系統", url: SITE_LINKS.studentServices },
    ],
    owner: "註冊組",
    contactKey: "registration",
  },
  {
    category: "入學流程",
    question: "要去哪裡查班級並確認基本資料？",
    answer: [
      "登入學生資訊服務系統，即可查看班級資訊並確認個人資料。",
      "如果姓名、身分或其他個人資料有誤，請聯絡註冊組協助修改，不要自行建立重複資料。",
    ],
    links: [{ label: "前往學生服務系統", url: SITE_LINKS.studentServices }],
    owner: "財務處",
    contactKey: "finance",
  },
  {
    category: "入學流程",
    question: "學雜費繳費單在哪裡下載？可以怎麼繳費？",
    answer: [
      "請先到學雜費系統下載自己的繳費單。",
      "現金繳費：攜帶個人繳費單至超商或臺灣企銀各分行繳費。",
      "網路銀行或 ATM：銀行代碼為臺灣企銀 050；繳款帳號請使用本人繳費單第二聯的專屬帳號，不要使用他人的繳費單。",
      "信用卡繳費：請依財務處公告的系統操作說明辦理。",
    ],
    links: [
      { label: "下載學雜費繳費單", url: SITE_LINKS.tuitionSystem },
      { label: "查看信用卡繳費操作說明", url: SITE_LINKS.creditCardGuide },
    ],
    owner: "財務處",
  },
  {
    category: "入學流程",
    question: "新生什麼時候選課？必修課也要自己選嗎？",
    answer: [
      "選課時間：115 年 9 月 4 日（五）15:00 至 9 月 15 日（二）16:00。",
      "請登入學生服務系統，再進入「選課專區」。",
      "分類通識課程需要同學自行選課。",
      "其他必修課程由課務組直接安排，同學不需要重複選課。",
    ],
    links: [{ label: "前往學生服務系統", url: SITE_LINKS.studentServices }],
    owner: "課務組",
    contactKey: "curriculum",
  },
  {
    category: "健康檢查",
    question: "9 月 4 日無法到校參加新生健檢，怎麼辦？",
    answer: [
      "可以在 115 年 10 月 28 日（三）14:00，到宗山樓一樓參加補檢。",
      "也可以自行到醫療院所健檢；檢查項目請先對照健康中心的「新生健康檢查專區」。",
      "自行健檢完成後，請將報告影本交到宗山樓一樓健康中心備查。",
    ],
    links: [{ label: "查看新生健康檢查專區", url: SITE_LINKS.healthCheck }],
    owner: "健諮中心",
    contactKey: "health",
  },
  {
    category: "健康檢查",
    question: "我是轉學生，還需要做新生健檢嗎？",
    answer: [
      "如果可以取得前一所學校的新生健檢報告，請將影本交到宗山樓一樓健康中心備查。",
      "如果無法取得原健檢報告，請在 115 年 10 月 28 日（三）14:00，到宗山樓一樓室內廣場參加補檢。",
    ],
    owner: "健諮中心",
    contactKey: "health",
  },
  {
    category: "健康檢查",
    question: "近期做過打工或公司健檢，可以直接交那份報告嗎？",
    answer: [
      "可以先自行核對檢查項目是否符合教育部規定；項目清單可參考健康中心的「新生健康檢查專區」。",
      "健檢報告日期必須是 115 年 6 月以後，才符合本次收件條件。",
    ],
    links: [{ label: "查看新生健康檢查專區", url: SITE_LINKS.healthCheck }],
    owner: "健諮中心",
    contactKey: "health",
  },
  {
    category: "健康檢查",
    question: "日間部碩士生什麼時候辦理健檢？",
    answer: ["於 115 年 10 月 28 日（三）14:00，在宗山樓一樓室內廣場辦理。"],
    owner: "健諮中心",
    contactKey: "health",
  },
  {
    category: "健康檢查",
    question: "新生健康檢查需要空腹嗎？",
    answer: [
      "不需要空腹，可以正常吃東西，日常用藥也可以照常服用。",
      "建議健檢前 3 天少吃油膩、辛辣食物，並保持充足睡眠。",
    ],
    owner: "健諮中心",
    contactKey: "health",
  },
  {
    category: "健康檢查",
    question: "所有新生都要做健康檢查嗎？",
    answer: [
      "原則上需要。依《學校衛生法》第 8 條，學校需建立學生健康管理制度，學生也應配合提供完整健康資訊。",
      "大學新生或特定年級的胸部 X 光檢查，是配合校園結核病防治政策與《傳染病防治法》辦理。",
      "健檢能幫助你及早了解自己的健康狀況，也讓學校在學習與校園生活中提供適當協助。",
    ],
    links: [{ label: "查看新生健康檢查專區", url: SITE_LINKS.healthCheck }],
    owner: "健諮中心",
    contactKey: "health",
  },
  {
    category: "新生定向",
    question: "115 學年度新生定向輔導在哪裡集合？",
    answer: ["集合地點在明明樓（智慧長廊）。", "請提早抵達，並留意學校最新通知或系上集合安排。"],
    links: [{ label: "查看新生定向活動公告", url: SITE_LINKS.orientation }],
    owner: "生活輔導組",
    contactKey: "studentLife",
  },
  {
    category: "新生定向",
    question: "新生定向輔導一定要參加嗎？",
    answer: [
      "新生定向是開學初很重要的校園適應活動，原則上請新生參加。",
      "如果因不可抗力因素無法出席，請依規定向各系教官辦理請假。",
    ],
    owner: "生活輔導組",
    contactKey: "studentLife",
  },
  {
    category: "新生定向",
    question: "新生定向輔導當天會做什麼？",
    answer: [
      "帶你認識校園環境、各處室位置，以及需要知道的校園資源與學生權益。",
      "說明學費減免、就學貸款、請假、選課等新生常用資訊。",
      "當天也安排新生健康檢查，幫助你更快熟悉大學生活。",
    ],
    owner: "生活輔導組",
    contactKey: "studentLife",
  },
];

/** 未來若另做行事曆頁面，可沿用此簡表；首頁目前改連正式校園行事曆。 */
export const events = [
  "新生學號開放查詢",
  "新生資料確認期間",
  "註冊與繳費作業",
  "宿舍申請截止",
  "新生選課",
  "新生健康檢查",
  "新生定向活動",
  "正式開學",
].map((title, index) => ({ id: `e${index}`, title, date: "請依正式公告" }));
