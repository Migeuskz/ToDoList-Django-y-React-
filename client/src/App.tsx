import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TaskPage from './pages/TaskPage/TaskPage'
import TaskFormPage from './pages/TaskFormPage/TaskFormPage'
import Navbar from './components/Navar/Navbar'

type Props = {}

export default function App({ }: Props) {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Navigate to="/task" />} />
        <Route path='/task' element={<TaskPage />} />
        <Route path='/tasks-create' element={<TaskFormPage />} />
      </Routes>

    </BrowserRouter>
  )
}