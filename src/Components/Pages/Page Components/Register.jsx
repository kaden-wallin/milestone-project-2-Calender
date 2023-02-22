
import { useState } from 'react';
import { supabase } from '../../../../supabase';
import db from '../../../models';



export default function Register(props) {
    const [ users, setUsers ] = useState([])
    const [login, setLogin ] = useState({ email: "", password: ""})
    const { email, password } = login

    async function fetchUsers() {
        const { data } = await supabase
            .from('user_access')
            .select()
            .eq(email === 'user_email')
            setUsers(data)
            console.log('Users are in the db')
            .redirect('/calender')
    }

    async function createUser() {
        await supabase
        .from('user_access')
        .insert ([ 
            { email, password } 
        ])
        .single()
        setLogin({ email: '', password: ''})
        fetchUsers()
    }
    

    return (
        <>
        <form method='POST' action='/register' onSubmit={handleSubmit}>
            <label htmlFor='email'> Email </label>
            <input value= {email} onChange={(e) => setLogin({ ...login, email: e.target.value})} type= 'text' placeholder="youremail@email.com" id="user_email" required/>
            <label htmlFor='password'> Password </label>
            <input value={password} onChange={(e) => setLogin({ ...login, password: e.target.value})} type= 'password' placeholder="****" id="user_password" required/>
            <button onClick={createUser}> Create Account </button>
        </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Log in here! </button>
        </>

    )
}
