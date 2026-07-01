import type { ReactNode } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Dashboard from './pages/Dashboard'
import CreateTask from './pages/CreateTask'
import EditTask from './pages/EditTask'
import TaskDetailsPage from './pages/TaskDetailsPage'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuth0 } from '@auth0/auth0-react'


function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0()
  if (isLoading) return <div>Loading...</div>
  return isAuthenticated ? children : <Navigate to='/login' />
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ padding: 12 }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route
            path='/tasks/create'
            element={
              <ProtectedRoute>
                <CreateTask />
              </ProtectedRoute>
            }
          />
          <Route path='/tasks/:id' element={<TaskDetailsPage />} />
          <Route
            path='/tasks/:id/edit'
            element={
              <ProtectedRoute>
                <EditTask />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

