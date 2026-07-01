import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'

export default function TaskDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getTaskById, deleteTask, updateTask } = useTasks()
  const task = id ? getTaskById(id) : undefined

  if (!task) return <p>Task not found</p>

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {task.dueDate ?? '—'}</p>
      <p>Status: {task.completed ? 'Completed' : 'Open'}</p>
      <div>
        <button onClick={() => updateTask(task.id, { completed: !task.completed })}>
          Toggle Complete
        </button>{' '}
        <Link to={`/tasks/${task.id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <button
          onClick={() => {
            deleteTask(task.id)
            navigate('/')
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
