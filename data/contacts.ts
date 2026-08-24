import { Contact } from "@/types";
// TODO: Replace with official MUST data
export const contacts: Contact[] = ["學號與帳號服務","註冊資料服務","學費與補助服務","住宿服務","課務服務","健康服務","新生定向服務","校園生活服務"].map((department,i)=>({id:`c${i+1}`,department,name:"待行政單位確認",phone:"待行政單位確認",email:"待行政單位確認",location:"待行政單位確認"}));
