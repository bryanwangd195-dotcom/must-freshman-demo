import { SITE_LINKS } from "@/config/links";

/**
 * 首頁顯示文字總表
 *
 * 行政或維護人員若只要改文字，優先從本檔開始：
 * - 學年度、網站名稱、首頁標題與輔助說明
 * - 各大區塊標題、說明、按鈕文字
 * - AI 小幫手固定提示文字
 *
 * 任務名稱、任務日期、正式網址與承辦單位不在本檔，請改：
 * - src/data/tasks.ts
 * - src/data/taskRules.ts
 * - src/data/contacts.ts
 */

export const SITE_CONTENT = {
  academicYear: "115",
  brand: {
    shortName: "明新新鮮人",
    englishName: "MUST FRESHMAN",
    universityName: "明新科技大學",
    platformName: "明新新生智慧導航平台",
  },
  navigation: [
    { label: "必辦流程", href: "#journey" },
    { label: "依情況辦理", href: "#conditional" },
    { label: "校園生活", href: "#life" },
    { label: "重要日程", href: SITE_LINKS.importantSchedule },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrowSuffix: "學年度新生入口",
    title: "嗨，新鮮人！",
    highlightedTitle: "準備好出發了嗎？",
    description: "照著必辦流程一步一步完成，再依自己的需求查看其他申請與校園生活資訊。",
    primaryAction: "查看我的必辦流程",
    secondaryAction: "認識明新",
    stickerPrimary: "一步一步｜不迷路！",
    stickerSecondary: "MUST｜GO!",
  },
  requiredFlow: {
    step: "01",
    kicker: "REQUIRED STEPS",
    title: "照順序完成開學前必辦流程",
    description: "請從第 1 步開始，並留意每張卡片的辦理日期與適用身分。",
    requiredLabel: "必須完成",
    actionLabel: "前往辦理",
  },
  conditional: {
    step: "02",
    kicker: "CHECK YOUR NEEDS",
    title: "再確認：這些要依你的情況辦理",
    description: "不是每位新生都需要完成。符合需求或資格時，再點進去確認。",
    label: "依個人情況",
    actionLabel: "了解是否需要",
  },
  campusLife: {
    step: "03",
    kicker: "CAMPUS LIFE",
    title: "不只辦手續，也開始認識明新",
    description: "六個常用入口集中呈現；正式網址確認後，點選即可前往校方對應頁面。",
    cards: [
      { title: "校園行事曆", subtitle: "重要日期與校內活動", icon: "📅", href: SITE_LINKS.calendar },
      { title: "校園地圖", subtitle: "快速找到教室與行政單位", icon: "🗺️", href: SITE_LINKS.campusMap },
      { title: "社團活動", subtitle: "認識學生社團與課外活動", icon: "🎉", href: SITE_LINKS.clubs },
      { title: "餐飲生活", subtitle: "校內外餐飲與生活資訊", icon: "🍽️", href: SITE_LINKS.dining },
      { title: "明新IG", subtitle: "追蹤明新 Instagram", icon: "📸", href: SITE_LINKS.instagram },
      { title: "明新FB", subtitle: "追蹤明新 Facebook", icon: "👍", href: SITE_LINKS.facebook },
    ],
  },
  faq: {
    step: "04",
    kicker: "FRESHMAN FAQ",
    title: "新生常見問題",
    description: "從報到、繳費到健檢與新生定向，先看最常遇到的問題。",
  },
  contact: {
    eyebrow: "還有問題？",
    title: "別擔心，我們陪你找到答案。",
    description: "Prototype 階段尚未填入正式聯絡資料；確認後可直接由資料檔更新，不需修改介面。",
  },
  footer: {
    placeholder: "地址、總機與網站聯絡單位：待行政單位確認",
    copyright: "© MUST Smart Freshman Navigator · Prototype",
  },
  assistant: {
    buttonPrompt: "有問題？",
    buttonAction: "問我就好！",
    title: "明新新生小幫手",
    welcome: "👋 嗨！不知道接下來要做什麼嗎？我會依網站的 Mock Data 協助你找方向。",
    defaultAnswer: "選一個問題，或直接輸入你想了解的事情。",
    noAnswer: "目前沒有找到明新官方確認的這項資訊。建議從下方任務或聯絡窗口繼續查找。",
    inputPlaceholder: "輸入你的問題…",
    privacy: "請勿輸入密碼、身分證字號或其他敏感個人資料。",
    prompts: ["我現在要做什麼？", "如何查學號？", "學費怎麼繳？", "我要申請宿舍", "轉學生需要健檢嗎？"],
  },
} as const;
