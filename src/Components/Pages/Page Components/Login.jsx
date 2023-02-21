import { React } from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../../../supabase.js'



export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [users, setUsers] =useState([])
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email)

    }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label for='user_email'> Email </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type= 'email' placeholder="youremail@email.com" id="user_email" name="email"/>
                    <label for='user_password'> Password </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type= 'password' placeholder="****" id="user_password" name="password"/>
                    <button> Log In </button>
                  </form>
                  <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here. </button>
            </>
            )
        }
        
