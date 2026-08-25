import type { StudentType } from "@/types";

/**
 * 首頁第一層「我是」身分類別
 *
 * 維護原則：
 * - 首頁只放學生能理解的高階分類，避免一次出現數十種招生身分。
 * - id 是 taskRules 的關聯鍵；正式上線後不要隨意變更。
 * - 入學管道另由 admissionTypes.ts 管理，不要混在本清單。
 */
export const studentTypes: StudentType[] = [
  { id: "day-4year", label: "日間部四技", group: "大學部" },
  { id: "day-2year", label: "日間部二技", group: "大學部" },
  { id: "transfer", label: "轉學生", group: "大學部" },
  { id: "graduate", label: "研究所", group: "研究所" },
  { id: "international", label: "境外學生", group: "境外學生" },
  { id: "continuing", label: "進修部", group: "大學部" },
  { id: "parent", label: "新生家長", group: "其他" },
];

