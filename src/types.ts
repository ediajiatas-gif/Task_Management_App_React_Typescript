// Types
export interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  dueDate?: string 
}

export interface UserProfile {
  name?: string
  email?: string
  sub?: string
}
