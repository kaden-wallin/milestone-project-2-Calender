import { React } from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../../../supabase.js'



export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
        async function handleSubmit (e) {
        e.preventDefault()
        console.log(email)

        const formData = {
            email: document.getElementById('user_email').value,
            password: document.getElementById('user_password').value
        }

        fetch('http://localhost/4002/api/users/login', {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
            const { data, error } = await supabase
            .from("user_access")
            .select("user_email")
            .eq('email', 'user_email')
            .single()
            .limit(1)
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
        
