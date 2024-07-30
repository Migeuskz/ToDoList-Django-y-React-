import { useForm } from "react-hook-form"
import { createTask } from "../../api/tasks.api"
import { useNavigate } from "react-router-dom"

export default function TaskFormPage() {

  const {register, handleSubmit, formState: {
    errors
  }} = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    await createTask(data)
    navigate('/task')
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Tittle:</label>
        <input type="text" placeholder='title' {...register('title', {required: true})} />
        {errors.title && <span>this field is required</span>}
        <label htmlFor="">Description:</label>
        <textarea rows={3} placeholder='Description' {...register('description', {required: true})}></textarea>
        {errors.description && <span>this field is required</span>}
        <button>Save</button>
      </form>
    </div>
  )
}
