import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

  if(!user) return <div>Please Login</div>
    return (
        <div>
            <h1>Welcome to React</h1>
            <h3> Hello {user.username}</h3>
            <h3>Your password is: {user.password}</h3>
           
        </div>
    )
}

export default Profile