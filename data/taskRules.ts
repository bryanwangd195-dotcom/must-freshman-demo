import { TaskRule } from "@/types";
import { studentTypes } from "./studentTypes";
import { tasks } from "./tasks";
export const taskRules: TaskRule[] = studentTypes.flatMap(s=>tasks.map(t=>({studentTypeId:s.id,taskId:t.id,requirement:(s.id==="parent"?"optional":((t.id==="aid"||t.id==="dorm")?"conditional":(s.id==="transfer"&&t.id==="health")?"conditional":"required")) as TaskRule["requirement"]})));
