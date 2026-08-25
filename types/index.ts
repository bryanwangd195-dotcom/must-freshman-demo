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
