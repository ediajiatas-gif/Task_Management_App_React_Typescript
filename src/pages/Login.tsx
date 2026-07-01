import { useAuth0 } from '@auth0/auth0-react'
const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'your-domain.auth0.com'
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id'
const isAuth0Configured = Boolean(
  domain &&
    clientId &&
    !domain.includes('your-domain') &&
    !clientId.includes('your-client-id') &&
    !domain.includes('your-auth0-domain'),
)

export default function Login() {
  const { loginWithRedirect, isLoading } = useAuth0()

  return (
    <div style={{textAlign: "center"}}>
      <h2>Login</h2>
      <p>{isAuth0Configured ? 'Click to sign in with Auth0 (demo).' : 'Auth0 is not configured yet. Add your real values to .env.local to enable sign-in.'}</p>
      <button onClick={() => isAuth0Configured && loginWithRedirect()} disabled={isLoading || !isAuth0Configured}>
        {isAuth0Configured ? 'Sign in' : 'Sign in (disabled)'}
      </button>
    </div>
  )
}
