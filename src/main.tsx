import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TaskProvider } from './context/TaskContext'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN || 'your-domain.auth0.com'
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id'
const isAuth0Configured = Boolean(
  domain &&
    clientId &&
    !domain.includes('your-domain') &&
    !clientId.includes('your-client-id') &&
    !domain.includes('your-auth0-domain'),
)

console.warn(
  isAuth0Configured
    ? 'Auth0 is configured.'
    : 'Auth0 is not configured yet. Set VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID in .env.local to enable sign-in.',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: window.location.origin }}>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Auth0Provider>
  </StrictMode>,
)
