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

export default function Register() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <h2>Register</h2>
      <p>{isAuth0Configured ? 'Registration uses Auth0 - create an account via the provider.' : 'Auth0 is not configured yet. Add your real values to .env.local to enable registration.'}</p>
      <button onClick={() => isAuth0Configured && loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })} disabled={!isAuth0Configured}>
        {isAuth0Configured ? 'Sign up' : 'Sign up (disabled)'}
      </button>
    </div>
  )
}
