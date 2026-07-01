import TaskForm from '../components/TaskForm'
import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

export default function CreateTask() {
  const { addTask } = useTasks()
  const navigate = useNavigate()

  return (
    <div style={{textAlign: "center"}}>
      <h2>Create Task</h2>
      <TaskForm
        onSubmit={(vals) => {
          const newTask = addTask({ ...vals })
          navigate(`/tasks/${newTask.id}`)
        }}
      />
    </div>
  )
}
