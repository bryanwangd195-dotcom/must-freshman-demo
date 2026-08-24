import { Task } from "@/types";
// TODO: Replace with official MUST data. Prototype dates are intentionally omitted.
export const tasks: Task[] = [
 ["student-id","入學準備","查詢新生學號","查學號","先找到你的學號，後續帳號與資料填寫會更順利。","Search","c1","/mascot/engineering.png"],
 ["account","入學準備","啟用校務帳號","啟用帳號","完成帳號啟用，準備使用校內數位服務。","KeyRound","c1","/mascot/semiconductor.png"],
 ["profile","註冊","填寫新生基本資料","新生資料","確認並完成入學所需的基本資料。","ClipboardPen","c2","/mascot/humanities.png"],
 ["payment","學費與補助","完成註冊與繳費","註冊繳費","依正式通知確認註冊與繳費資訊。","WalletCards","c3","/mascot/management.png"],
 ["aid","學費與補助","申請學費減免或就學貸款","減免貸款","有需要的同學可先了解申請條件與應備資料。","HandCoins","c3","/mascot/management.png"],
 ["dorm","住宿交通","申請學生宿舍","宿舍申請","有住宿需求的新生，請留意正式申請公告。","House","c4","/mascot/human-ecology.png"],
 ["course","學習準備","完成新生選課","選課","了解課程與選課方式，準備第一學期。","BookOpen","c5","/mascot/engineering.png"],
 ["health","新生第一週","完成新生健康檢查","健康檢查","依身分確認是否需要參加新生健康檢查。","HeartPulse","c6","/mascot/human-ecology.png"],
 ["orientation","新生第一週","參加新生定向活動","新生定向","認識校園、系所與重要學習資源。","Flag","c7","/mascot/humanities.png"],
 ["campus","校園生活","開始我的明新生活","校園生活","探索交通、餐飲、圖書館與社團資源。","Sparkles","c8","/mascot/semiconductor.png"]
].map((x,i)=>({id:x[0],category:x[1],title:x[2],shortTitle:x[3],description:x[4],icon:x[5],contactId:x[6],mascotAsset:x[7],actionUrl:"#contact",detailUrl:"#contact",preparation:["待行政單位確認"],notes:["日期、網址與承辦資訊待行政單位確認"],priority:i+1}));
