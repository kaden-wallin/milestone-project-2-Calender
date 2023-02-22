import { useRouter } from 'react-router';
import { useState } from 'react';
import useCreateUser from './Hooks/useCreateUser';



export default function Register(props) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const createUserMutation = useCreateUser({
        email,
        password
    })

    if (createUserMutation.isSuccess) {
        router.push("/api/users/register")
    }
    

    return (
        <>
        <form method='POST' action='/register' onSubmit={handleSubmit}>
            <label htmlFor='email'> Email </label>
            <input value= {email} onChange={(e) => setEmail(e.target.value)} type= 'text' placeholder="youremail@email.com" id="user_email" required/>
            <label htmlFor='password'> Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type= 'password' placeholder="****" id="user_password" required/>
            <button onClick={() => createUserMutation.mutate()}> Create Account </button>
        </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Log in here! </button>
        </>

    )
}
