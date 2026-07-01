import TaskForm from '../components/TaskForm'
import { useTasks } from '../context/TaskContext'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditTask() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getTaskById, updateTask } = useTasks()
  const task = id ? getTaskById(id) : undefined

  if (!task) return <p>Task not found</p>

  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm
        initial={task}
        onSubmit={(vals) => {
          updateTask(task.id, vals)
          navigate(`/tasks/${task.id}`)
        }}
      />
    </div>
  )
}
