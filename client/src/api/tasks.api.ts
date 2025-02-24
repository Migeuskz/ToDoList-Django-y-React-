import axios from "axios"
import { Task } from "../types"

const tasksApi = axios.create({
   baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => tasksApi.get('/')

export const getTask = (id:Task) => tasksApi.get(`/${id}/`)

export const createTask = (task:Task) => tasksApi.post('/', task)

export const deleteTask = (id:Task) => tasksApi.delete(`/${id}`)

export const updateTask = (id:Task, task:Task) => tasksApi.put(`/${id}/`, task)