import { tasks } from "@/data/tasks";
import { taskRules } from "@/data/taskRules";
import type { Requirement, Task } from "@/types";

/** 前端實際使用的任務：程序主檔資料加上該身分的規則。 */
export type PersonalizedTask = Task & { requirement: Exclude<Requirement, "not_applicable"> };

/** 依學生身分取出適用任務；不適用項目不會進入畫面。 */
export const getTasksForStudent = (id: string): PersonalizedTask[] =>
  taskRules
    .filter((rule) => rule.studentTypeId === id && rule.requirement !== "not_applicable")
    .map((rule) => ({
      ...tasks.find((task) => task.id === rule.taskId)!,
      requirement: rule.requirement as PersonalizedTask["requirement"],
    }));

export const getTaskStatus=()=>"pending" as const;
export const getDaysUntilDeadline=()=>null;
export const getPriorityTasks=(id:string)=>getTasksForStudent(id).sort((a,b)=>a.priority-b.priority).slice(0,4);
