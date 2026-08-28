"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/config/siteContent";
import { getTasksForStudent } from "@/lib/tasks";
import { Assistant } from "./home/Assistant";
import { Hero } from "./home/Hero";
import { CampusLife, ContactSection, FaqSection } from "./home/InformationSections";
import { SiteFooter } from "./home/SiteFooter";
import { SiteHeader } from "./home/SiteHeader";
import { ConditionalTasks, RequiredFlow } from "./home/TaskSections";

/**
 * 首頁組裝與互動狀態
 *
 * 這個檔案只負責：
 * - 控制選單、FAQ 與 AI 面板的開關。
 * - 將統一資料傳給各區段元件。
 *
 * 維護人員不應在這裡直接修改正式文字、網址或圖片：
 * - 文字：src/config/siteContent.ts
 * - 圖片：src/config/mediaAssets.ts 與 public/mascot/
 * - 任務、日期、適用身分與步驟：src/data/tasks.ts
 * - 所有正式網址：src/config/links.ts
 * - 身分規則：src/data/taskRules.ts
 * - 聯絡人：src/data/contacts.ts
 * - FAQ：src/data/content.ts
 */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string>(SITE_CONTENT.assistant.defaultAnswer);

  // 首頁已取消身分選擇介面；目前以日間部四技的共通規則呈現 Prototype。
  // 未來若校方決定恢復分眾，可將此固定 id 改由 SSO／招生 API 回傳，不應由前端猜測身分。
  const applicableTasks = getTasksForStudent("day-4year").sort((a, b) => a.priority - b.priority);
  const requiredTasks = applicableTasks.filter((task) => task.requirement === "required");
  const conditionalTasks = applicableTasks.filter((task) => task.requirement !== "required");

  /** Prototype 關鍵字回答；正式版請抽換成受校方治理的 assistant service。 */
  const askAssistant = (userQuestion: string) => {
    setQuestion("");
    let taskId: string | null = null;
    if (userQuestion.includes("宿舍")) taskId = "dorm";
    else if (userQuestion.includes("減免")) taskId = "tuition-reduction";
    else if (userQuestion.includes("貸款")) taskId = "student-loan";
    else if (userQuestion.includes("繳費")) taskId = "payment";
    else if (userQuestion.includes("停車")) taskId = "parking";
    else if (userQuestion.includes("健檢")) taskId = "health";
    else if (userQuestion.includes("學號")) taskId = "student-id";
    const task = applicableTasks.find((item) => item.id === taskId);

    setAnswer(
      task
        ? `${task.title}：${task.description} 正式日期、辦理網址與承辦資訊目前待行政單位確認。`
        : SITE_CONTENT.assistant.noAnswer,
    );
  };

  return (
    <>
      <SiteHeader menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((value) => !value)} />

      <main id="top">
        <Hero />

        <RequiredFlow tasks={requiredTasks} />
        <ConditionalTasks tasks={conditionalTasks} />
        <CampusLife />
        <FaqSection openFaq={openFaq} onFaqToggle={(index) => setOpenFaq(openFaq === index ? null : index)} />
        <ContactSection />
      </main>

      <SiteFooter />
      <Assistant
        open={assistantOpen}
        question={question}
        answer={answer}
        onOpen={() => setAssistantOpen(true)}
        onClose={() => setAssistantOpen(false)}
        onQuestionChange={setQuestion}
        onAsk={askAssistant}
      />
    </>
  );
}
