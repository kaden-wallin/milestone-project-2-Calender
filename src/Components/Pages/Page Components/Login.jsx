import { React } from 'react'
import { useState } from 'react'


export const Login = (props) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
   

    async function handleSubmit (e) {
        e.preventDefault()
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
