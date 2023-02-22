import { React } from 'react'
import { useState } from 'react'


export const Login = (props) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
   // const [logInfo, setLogInfo ] = useState([])

    async function handleSubmit (e) {
        e.preventDefault()
    }

    return (
        <>
            <form method= "GET" action= '/' onSubmit={handleSubmit}>
                <label for='user_email'> Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type= 'email' placeholder="youremail@email.com" id="user_email" required/>
                <label for='user_password'> Password </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type= 'password' placeholder="****" id="user_password" required/>
                <button> Log In </button>
              </form>
              <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here. </button>
        </>
        )
    }
