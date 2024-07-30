import { Task } from "../../types"

type taskProps = {
    task: Task
}

export default function TaskCard({task}:taskProps) {
  return (
    <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <hr />
        </div>
  )
}
