import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Task } from '../types'

// Define the shape of the context
interface TaskContextType {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id'>) => Task
  updateTask: (id: string, updates: Partial<Task>) => void
  deleteTask: (id: string) => void
  getTaskById: (id: string) => Task | undefined
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

// Create ids for demo purposes
const makeId = () => Math.random().toString(36).slice(2, 9)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([
    // Example to show UI
    { id: makeId(), title: 'Welcome task', description: 'This is a sample task.', completed: false },
  ])

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = { id: makeId(), ...task }
    setTasks((prevTasks) => [newTask, ...prevTasks])
    return newTask
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, ...updates } : task)))
  }

  const deleteTask = (id: string) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))

  const getTaskById = (id: string) => tasks.find((task) => task.id === id)

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within TaskProvider')
  return context
}
