export type Requirement = "required" | "conditional" | "optional" | "not_applicable";
export type VerificationStatus = "pending" | "in_review" | "confirmed";
export interface StudentType { id: string; label: string; group: string; }
export interface AdmissionType { id: string; label: string; applicableStudentTypeIds: string[]; active: boolean; }
export interface Contact {
  id: string;
  department: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  verificationStatus: VerificationStatus;
  updatedAt?: string;
}
export interface Task {
  id: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  startDate?: string;
  endDate?: string;
  /** 前台直接顯示的日期文字，可包含多個日期或時間區間。 */
  displayDate: string;
  /** 前台顯示的適用對象；正式資料應由業務單位確認。 */
  applicableTo: string;
  /** 需要在卡片內提醒學生的操作步驟；沒有步驟時使用空陣列。 */
  steps: string[];
  actionUrl?: string;
  detailUrl?: string;
  contactId: string;
  preparation: string[];
  notes: string[];
  priority: number;
  mascotAsset: string;
  dataOwner: string;
  verificationStatus: VerificationStatus;
  sourceNote: string;
}
export interface TaskRule { studentTypeId:string; taskId:string; requirement:Requirement; customNote?:string; }
export interface EventItem { id:string; title:string; date:string; taskId?:string; }
