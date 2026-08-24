export type Requirement = "required" | "conditional" | "optional" | "not_applicable";
export interface StudentType { id: string; label: string; group: string; }
export interface Contact { id: string; department: string; name: string; phone: string; email: string; location: string; }
export interface Task { id:string; category:string; title:string; shortTitle:string; description:string; icon:string; startDate?:string; endDate?:string; actionUrl?:string; detailUrl?:string; contactId:string; preparation:string[]; notes:string[]; priority:number; mascotAsset:string; }
export interface TaskRule { studentTypeId:string; taskId:string; requirement:Requirement; customNote?:string; }
export interface EventItem { id:string; title:string; date:string; taskId?:string; }
