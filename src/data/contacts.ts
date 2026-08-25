import type { Contact } from "@/types";

/**
 * 承辦窗口主檔
 *
 * 修改位置：
 * - department：對學生顯示的承辦單位名稱。
 * - name／phone／email／location：正式聯絡資料。
 * - verificationStatus：pending（待確認）、in_review（確認中）、confirmed（已確認）。
 * - tasks.ts 透過 contactId 對應本檔 id，請勿任意更改既有 id。
 *
 * TODO: Replace with official MUST data
 */
export const contacts: Contact[] = [
  { id: "c1", department: "學號與帳號服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c2", department: "註冊資料服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c3", department: "學費與補助服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c4", department: "住宿服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c5", department: "課務服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c6", department: "健康服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c7", department: "新生定向服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
  { id: "c8", department: "校園生活服務", name: "待行政單位確認", phone: "待行政單位確認", email: "待行政單位確認", location: "待行政單位確認", verificationStatus: "pending" },
];
