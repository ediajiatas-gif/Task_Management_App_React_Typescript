import { useState } from 'react'
import type { Task } from '../types'

type Props = {
  initial?: Partial<Task>
  onSubmit: (vals: { title: string; description?: string; dueDate?: string; completed: boolean }) => void
}

// Simple form for create & edit. Includes minimal validation.
export default function TaskForm({ initial = {}, onSubmit }: Props) {
  const [title, setTitle] = useState(initial.title ?? '')
  const [description, setDescription] = useState(initial.description ?? '')
  const [dueDate, setDueDate] = useState(initial.dueDate ?? '')
  const [completed, setCompleted] = useState(initial.completed ?? false)
  const [error, setError] = useState<string | null>(null)

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    setError(null)
    onSubmit({ title: title.trim(), description: description.trim(), dueDate: dueDate || undefined, completed })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <form
        onSubmit={handle}
        style={{
          maxWidth: 600,
          width: '100%',
          boxSizing: 'border-box',
          padding: '1rem',
          textAlign: 'left',
          background: 'transparent',
          borderRadius: 8,
        }}
      >
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <div style={{ marginBottom: 8 }}>
          <label>Title</label>
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', minHeight: 100, padding: 8, boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Due Date</label>
          <br />
          <input
            type='date'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type='checkbox' checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            Completed
          </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          <button type='submit' style={{ padding: '8px 16px' }}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
