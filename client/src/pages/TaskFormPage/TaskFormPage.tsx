import { useForm } from "react-hook-form"
import { createTask, deleteTask, updateTask, getTask } from "../../api/tasks.api"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

export default function TaskFormPage() {

  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    setValue
 } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  const onSubmit = handleSubmit(async (data) => {
    if(params.id){
      console.log(data)
      await updateTask(params.id, data)
    }else{
      await createTask(data)
    }
    navigate('/task')
  })
  
  useEffect(() => {
    async function loadTask(){
      if(params.id){
        const {data: {title, description}} = await getTask(params.id)
        setValue('title', title)
        setValue('description', description)
        // console.log(res)
      }
    }
    loadTask()
  }, [])

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
