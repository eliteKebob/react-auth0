import { useAuth0 } from '@auth0/auth0-react'

const User = () => {
  const { logout, user } = useAuth0()
  return (
    <>
      <div>
        <div className='user'>
          <img src={user?.picture} alt='' />
          <p>
            {user?.given_name} {user?.family_name} {user?.locale}
          </p>
          <p>{user?.email}</p>
          <p>
            {user?.email_verified ? 'Email verified.' : 'Email not verified.'}
          </p>
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  )
}
export default User
