import { tasks } from "@/data/tasks"; import { taskRules } from "@/data/taskRules";
export const getTasksForStudent=(id:string)=>taskRules.filter(r=>r.studentTypeId===id&&r.requirement!=="not_applicable").map(r=>({...tasks.find(t=>t.id===r.taskId)!,requirement:r.requirement}));
export const getTaskStatus=()=>"pending" as const;
export const getDaysUntilDeadline=()=>null;
export const getPriorityTasks=(id:string)=>getTasksForStudent(id).sort((a,b)=>a.priority-b.priority).slice(0,4);
