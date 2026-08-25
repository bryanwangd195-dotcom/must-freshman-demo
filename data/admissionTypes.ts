import type { AdmissionType } from "@/types";

/**
 * 招生管道主檔（目前預留，尚未顯示於首頁）
 *
 * 只有當招生管道會改變日期、網址或流程時，才需要在 UI 顯示第二層選擇。
 * 正式清單應由招生業務單位確認，避免把 Student Type 與 Admission Type 混用。
 */
export const admissionTypes: AdmissionType[] = [
  { id: "selection", label: "甄選入學（待確認）", applicableStudentTypeIds: ["day-4year"], active: false },
  { id: "distribution", label: "聯合登記分發（待確認）", applicableStudentTypeIds: ["day-4year"], active: false },
  { id: "transfer-exam", label: "轉學生招生（待確認）", applicableStudentTypeIds: ["transfer"], active: false },
  { id: "international-application", label: "境外生申請（待確認）", applicableStudentTypeIds: ["international"], active: false },
];

