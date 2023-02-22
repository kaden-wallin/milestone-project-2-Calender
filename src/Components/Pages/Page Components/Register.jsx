import { react } from 'react'
import { useState } from 'react'



export const Register = (props) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [logInfo, setLogInfo ] = useState([]) 

    async function handleSubmit (e) {
        e.preventDefault()
    } 

    return (
        <>
        <form method='POST' action='/register' onSubmit={handleSubmit}>
            <label htmlFor='email'> Email </label>
            <input value= {email} onChange={(e) => setLogInfo({ ...logInfo, email: e.target.value})} type= 'text' placeholder="youremail@email.com" id="user_email" required/>
            <label htmlFor='password'> Password </label>
            <input value={password} onChange={(e) => setLogInfo({ ...logInfo, password: e.target.value})} type= 'password' placeholder="****" id="user_password" required/>
            <button> Create Account </button>
        </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Log in here! </button>
        </>

    )
}