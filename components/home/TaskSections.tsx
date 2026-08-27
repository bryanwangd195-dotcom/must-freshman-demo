import { ArrowRight, Clock3, UsersRound } from "lucide-react";
import { externalLinkProps } from "@/config/links";
import { SITE_CONTENT } from "@/config/siteContent";
import type { PersonalizedTask } from "@/lib/tasks";

/**
 * 任務圖示對照表
 * - key 必須等於 src/data/tasks.ts 的 task id。
 * - 若改用正式 SVG／圖片，可將此表改成媒體路徑並在元件中使用 Image。
 */
const TASK_ICONS: Record<string, string> = {
  "student-id": "🔎",
  account: "🔐",
  profile: "📝",
  payment: "💳",
  "tuition-reduction": "🤝",
  "student-loan": "💰",
  dorm: "🏠",
  parking: "🅿️",
  course: "📚",
  health: "❤️",
  orientation: "🎒",
  "student-card": "🪪",
};

interface RequiredFlowProps { tasks: PersonalizedTask[]; }

/**
 * 區段 01：開學前必辦流程
 *
 * 維護索引：
 * - 區段標題：src/config/siteContent.ts → requiredFlow
 * - 任務名稱、說明、日期、適用身分、操作步驟與網址：src/data/tasks.ts
 * - 哪些身分要看到哪些任務：src/data/taskRules.ts
 * - actionUrl 的實際網址集中於 src/config/links.ts；外部網址會自動開新視窗。
 */
export function RequiredFlow({ tasks }: RequiredFlowProps) {
  const content = SITE_CONTENT.requiredFlow;
  return (
    <section className="mustFlow" id="journey">
      <div className="flowHeading">
        <span className="bigStep">{content.step}</span>
        <div>
          <span className="kicker">{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <span className="mustCount">共 {tasks.length} 項必辦</span>
      </div>

      {tasks.length ? (
        <div className="flowList">
          {tasks.map((task, index) => {
            const actionUrl = task.actionUrl;
            return (
              <article className="flowCard" key={task.id}>
                <div className="flowNumber"><small>STEP</small><b>{String(index + 1).padStart(2, "0")}</b></div>
                <div className="flowIcon">{TASK_ICONS[task.id] ?? "✓"}</div>
                <div className="flowCopy">
                  <span className="requiredLabel">{content.requiredLabel}</span>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <div className="flowMeta">
                    <span><Clock3 /> 辦理日期：{task.displayDate}</span>
                    <span><UsersRound /> 適用身分：{task.applicableTo}</span>
                  </div>
                  {task.steps.length > 0 && (
                    <div className="taskSteps">
                      <b>登入步驟</b>
                      <ol>{task.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                    </div>
                  )}
                </div>
                {actionUrl ? (
                  <a href={actionUrl} {...externalLinkProps(actionUrl)}>{content.actionLabel} <ArrowRight /></a>
                ) : (
                  <span className="pendingAction">網址待確認</span>
                )}
                {index < tasks.length - 1 && <div className="flowArrow">↓</div>}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="emptyFlow">此身分沒有設定共同必辦流程，請查看下方相關資訊。</div>
      )}
    </section>
  );
}

interface ConditionalTasksProps { tasks: PersonalizedTask[]; }

/**
 * 區段 02：依情況辦理
 * - 任務是否屬於此區，由 src/data/taskRules.ts 的 conditional／optional 決定。
 * - 每張卡片的連結直接讀取 src/data/tasks.ts 的 detailUrl。
 * - 本版固定呈現：學費減免、就學貸款、學生宿舍、校內停車證。
 */
export function ConditionalTasks({ tasks }: ConditionalTasksProps) {
  const content = SITE_CONTENT.conditional;
  return (
    <section className="section conditionalSection" id="conditional">
      <div className="flowHeading sectionNumberHeading">
        <span className="bigStep">{content.step}</span>
        <div><span className="kicker">{content.kicker}</span><h2>{content.title}</h2><p>{content.description}</p></div>
      </div>
      <div className="conditionalGrid">
        {tasks.map((task) => {
          const detailUrl = task.detailUrl || "#contact";
          return (
            <article key={task.id}>
              <span className="conditionIcon">{TASK_ICONS[task.id] ?? "✓"}</span>
              <div><span className="conditionalLabel">{content.label}</span><h3>{task.title}</h3><p>{task.description}</p></div>
              <a href={detailUrl} {...externalLinkProps(detailUrl)}>{content.actionLabel} <ArrowRight /></a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export { TASK_ICONS };
