import { useAuth0 } from '@auth0/auth0-react'
import User from './components/User'

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0()

  console.log(user)

  return (
    <div className='App'>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <User />
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </div>
  )
}

export default App
