import { useForm } from "react-hook-form"
import { createTask, deleteTask } from "../../api/tasks.api"
import { useNavigate, useParams } from "react-router-dom"

export default function TaskFormPage() {

  const { register, handleSubmit, formState: {
    errors
  } } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  const onSubmit = handleSubmit(async data => {
    await createTask(data)
    navigate('/task')
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Tittle:</label>
        <input type="text" placeholder='title' {...register('title', { required: true })} />
        {errors.title && <span>this field is required</span>}
        <label htmlFor="">Description:</label>
        <textarea rows={3} placeholder='Description' {...register('description', { required: true })}></textarea>
        {errors.description && <span>this field is required</span>}
        <button>Save</button>
      </form>
      
      {params.id && (
        <button
          onClick={async () => {
            const aceppted = window.confirm('are you sure?')
            if(aceppted){
              await deleteTask(params.id)
              navigate('/task')
            }
          }}
        >
          Delete
        </button>
      )}

    </div>
  )
}
