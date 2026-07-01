import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import "./NavBar.css"

// Simple navigation bar with links to main pages
export default function NavBar() {
  const { isAuthenticated, logout } = useAuth0()

  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <Link to='/' className='link'>
        Dashboard
      </Link>
      <Link to='/tasks/create' className='link'>
        Create Task
      </Link>
      {isAuthenticated ? (
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          style={{ marginLeft: 12, cursor: 'pointer' }}
        >
          Logout
        </button>
      ) : (
        <Link to='/login' className='link'>Login</Link>
      )}
    </nav>
  )
}
