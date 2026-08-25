import { studentTypes } from "./studentTypes";
import { tasks } from "./tasks";
import type { Requirement, TaskRule } from "@/types";

/**
 * 身分 × 程序規則
 *
 * requirement 對應：
 * - required：每位該身分學生都要完成，顯示於「02 必辦流程」。
 * - conditional：符合個人條件才辦，顯示於「依情況辦理」。
 * - optional：自由選擇，顯示於「依情況辦理」。
 * - not_applicable：不適用，不顯示。
 *
 * 修改方式：
 * 1. 先找到 RULE_OVERRIDES 內的 studentTypeId。
 * 2. 加入或修改 taskId: requirement。
 * 3. 沒有覆寫的任務會使用 getDefaultRequirement() 的預設值。
 * 4. 正式規則必須由資料負責單位確認，不可只依 Prototype 推定。
 */
const RULE_OVERRIDES: Record<string, Partial<Record<string, Requirement>>> = {
  transfer: { health: "conditional", orientation: "conditional" },
  international: { dorm: "required" },
  parent: Object.fromEntries(tasks.map((task) => [task.id, "optional"])) as Record<string, Requirement>,
};

const getDefaultRequirement = (taskId: string): Requirement =>
  ["tuition-reduction", "student-loan", "dorm", "parking"].includes(taskId)
    ? "conditional"
    : "required";

export const taskRules: TaskRule[] = studentTypes.flatMap((studentType) =>
  tasks.map((task) => ({
    studentTypeId: studentType.id,
    taskId: task.id,
    requirement: RULE_OVERRIDES[studentType.id]?.[task.id] ?? getDefaultRequirement(task.id),
    customNote: "Prototype 規則，待行政單位確認",
  })),
);
