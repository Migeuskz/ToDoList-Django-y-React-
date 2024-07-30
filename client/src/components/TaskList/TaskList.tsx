import { useEffect, useState } from "react"
import { getAllTasks } from "../../api/tasks.api"
import { Task } from "../../types";
import TaskCard from "../TaskCard/TaskCard";

// interface Task {
//     title: string;
//     description: string;
//   }

export default function TaskList() {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() =>{
        async function loadTask(){
            const res = await getAllTasks()
            setTasks(res.data)
        }

        loadTask()
    }, [])

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  )
}
