import type { Contact } from "@/types";

/**
 * 校內聯絡方式主檔
 *
 * 維護原則：
 * - 總機只在 SCHOOL_SWITCHBOARD 修改。
 * - 各單位名稱與分機只在 CONTACT_DIRECTORY 修改。
 * - FAQ 與頁面最下方會共同讀取本資料，避免同一分機重複維護。
 * - extensions 只填分機；畫面會自動加上總機。
 */
export const SCHOOL_SWITCHBOARD = "(03)5593142";

export const CONTACT_DIRECTORY = {
  registration: { department: "註冊組", extensions: "2230～2236" },
  finance: { department: "財務處", extensions: "2151" },
  curriculum: { department: "課務組", extensions: "2244" },
  health: { department: "健諮中心", extensions: "2356" },
  studentLife: { department: "生活輔導組", extensions: "2814" },
  generalAffairs: { department: "事務組", extensions: "2431" },
} as const;

export type ContactDirectoryKey = keyof typeof CONTACT_DIRECTORY;

export const formatContactPhone = (key: ContactDirectoryKey) =>
  `${SCHOOL_SWITCHBOARD} 分機 ${CONTACT_DIRECTORY[key].extensions}`;

/**
 * 任務承辦窗口對照
 * - tasks.ts 使用 contactId 對應此陣列。
 * - 尚未取得正式窗口的業務保留「待權責單位確認」，不可自行推測。
 */
export const contacts: Contact[] = [
  { id: "c1", department: CONTACT_DIRECTORY.registration.department, name: "服務窗口", phone: formatContactPhone("registration"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
  { id: "c2", department: CONTACT_DIRECTORY.registration.department, name: "服務窗口", phone: formatContactPhone("registration"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
  { id: "c3", department: CONTACT_DIRECTORY.finance.department, name: "服務窗口", phone: formatContactPhone("finance"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
  { id: "c4", department: "住宿服務", name: "待確認", phone: "待確認", email: "待確認", location: "待確認", verificationStatus: "pending" },
  { id: "c5", department: CONTACT_DIRECTORY.curriculum.department, name: "服務窗口", phone: formatContactPhone("curriculum"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
  { id: "c6", department: CONTACT_DIRECTORY.health.department, name: "服務窗口", phone: formatContactPhone("health"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
  { id: "c7", department: CONTACT_DIRECTORY.studentLife.department, name: "服務窗口", phone: formatContactPhone("studentLife"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
  { id: "c8", department: CONTACT_DIRECTORY.generalAffairs.department, name: "服務窗口", phone: formatContactPhone("generalAffairs"), email: "待確認", location: "待確認", verificationStatus: "in_review" },
];
