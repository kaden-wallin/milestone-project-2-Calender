import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)

export const Register = (props) => {
    const navigate = useNavigate()
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [message, setMessage] = useState('');
    const [logInfo, setLogInfo ] = useState([]) 

    async function handleSubmit (e) {
        e.preventDefault()
        console.log(email)
        console.log(password)

        const { data: existingUser, error: selectError } = await supabase
            .from('user_access')
            .select('*')
            .eq('user_email', email)
            .single()

            console.log('existingUser:', existingUser)

        if(existingUser) {
            setMessage('Email is already in use')
            return
        }

        //EXTRACTS NEW USER DATA
        const newUserData = {
            user_email: email,
            user_password: password,
        }

        //MAKES THE API CALL
        const { data: newUser, error: insertError } = await supabase
            .from('user_access')
            .insert(newUserData)
            
        if (insertError) {
            setMessage('Your account cannot be created at this time');
            console.error(insertError.message)
        } else {
            setMessage('Account created successfully, have fun!');
        
        props.onFormSwitch('login')
        } 
    } 

    return (
        <>
        <div class='container flex flex-wrap justify-center items-center m-auto w-auto'>
        <form class= "w-full max-w-lg " method='POST' action='/register' onSubmit={handleSubmit}>
        <div class= 'flex flex-wrap justify-center items-center -mx-3 mb-6 '>
            <div class= "w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class= "block tracking-wide text-black-700 text-xl font-bold mb-2"for='user_email' htmlFor='email'> Email </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value= {email} onChange={(e) => setEmail(e.target.value)} type= 'text' placeholder="youremail@email.com" id="user_email" required/>
            </div>
            <div class= "w-full md:w-1/2 px-3">
                <label class= "block tracking-wide text-black-700 text-xl font-bold mb-2" htmlFor='password'> Password </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={password} onChange={(e) => setPassword(e.target.value)} type= 'password' placeholder="****" id="user_password" required/>
            </div>
            <div>
                <button class= "appearance-none block w-full bg-gray-200 text-black-700 border border-rose-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onCLick={async () => await handleSubmit()} type='submit'> Create Account </button>
            </div>
        </div>
        </form>
        </div>
        {message && <p>{message}</p>}
            <button class="appearance-none block w-full bg-gray-200 text-black-700 border border-rose-900 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500" onClick={() => props.onFormSwitch('login')}> Already have an account? Log in here! </button>
        </>

    )
}