import axios from "axios"
import { Task } from "../types"

const tasksApi = axios.create({
   baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => tasksApi.get('/')


export const createTask = (task:Task) => tasksApi.post('/', task)

