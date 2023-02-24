import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react'

const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)
const auth = supabase.auth

export const Login = (props) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
   

    async function handleSubmit (e) {
        e.preventDefault()

        try {
            const { user, session, error } = await auth.signIn({
            email,
            password,
        })

        if (error) {
            throw error;
        }

        console.log(user)
        console.log(session)

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <>
            <div class='container flex flex-wrap justify-center items-center m-auto w-auto'>
            <form class= "w-full max-w-lg " method= "GET" action= '/' onSubmit={handleSubmit}>
                <div class= 'flex flex-wrap justify-center items-center -mx-3 mb-6 '>
                    <div class= "w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class= "block tracking-wide text-black-700 text-xl font-bold mb-2"for='user_email'> Email </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={email} onChange={(e) => setEmail(e.target.value)} type= 'email' placeholder="youremail@email.com" id="user_email" required/>
                    </div>
                    <div class= "w-full md:w-1/2 px-3">
                        <label class= "block tracking-wide text-black-700 text-xl font-bold mb-2" for='user_password'> Password </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={password} onChange={(e) => setPassword(e.target.value)} type= 'password' placeholder="****" id="user_password" required/>
                    </div>
                    <div>
                        <button class= "appearance-none block w-full bg-gray-200 text-black-700 border border-rose-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onClick={handleSubmit} type='submit'> Log In </button>
                    </div>
                </div>
              </form>
              </div>
              <button class="appearance-none block w-full bg-gray-200 text-black-700 border border-rose-900 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-white focus:border-gray-500" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here. </button>
        </>
        )
    }
