"use client";

import { useState } from "react";
import { getTasksForStudent } from "@/lib/tasks";
import { Hero } from "./home/Hero";
import { CampusLife, ContactSection, FaqSection } from "./home/InformationSections";
import { SiteFooter } from "./home/SiteFooter";
import { SiteHeader } from "./home/SiteHeader";
import { ConditionalTasks, RequiredFlow } from "./home/TaskSections";

/**
 * 首頁組裝與互動狀態
 *
 * 這個檔案只負責：
 * - 控制選單與 FAQ 的開關。
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

  // 首頁已取消身分選擇介面；目前以日間部四技的共通規則呈現 Prototype。
  // 未來若校方決定恢復分眾，可將此固定 id 改由 SSO／招生 API 回傳，不應由前端猜測身分。
  const applicableTasks = getTasksForStudent("day-4year").sort((a, b) => a.priority - b.priority);
  const requiredTasks = applicableTasks.filter((task) => task.requirement === "required");
  const conditionalTasks = applicableTasks.filter((task) => task.requirement !== "required");

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
    </>
  );
}
