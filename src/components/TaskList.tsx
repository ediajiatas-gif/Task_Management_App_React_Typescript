import { useTasks } from '../context/TaskContext'
import { Link } from 'react-router-dom'

// List all tasks with quick actions
export default function TaskList() {
  const { tasks, deleteTask, updateTask } = useTasks()

  if (tasks.length === 0) return <p>No tasks yet — create one!</p>

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link to={`/tasks/${task.id}`} style={{ fontWeight: 600 }}>
                {task.title}
              </Link>
              <div style={{ fontSize: 12, color: '#666' }}>{task.description}</div>
            </div>
            <div>
              <button onClick={() => updateTask(task.id, { completed: !task.completed })}>
                {task.completed ? 'Mark open' : 'Complete'}
              </button>{' '}
              <Link to={`/tasks/${task.id}/edit`} style={{ marginRight: 8 }}>
                Edit
              </Link>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
