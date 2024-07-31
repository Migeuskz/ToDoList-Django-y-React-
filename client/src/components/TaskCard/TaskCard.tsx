import { useNavigate } from "react-router-dom"
import { Task } from "../../types"

type taskProps = {
    task: Task
}
export default function TaskCard({task}:taskProps) {

  const navigate = useNavigate()

  return (
    <div style={{background: 'blue'}}
      onClick={() =>{
        navigate(`/tasks/${task.id}`)
      }}
    >


    <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <hr />
        </div>
    </div>
  )
}
