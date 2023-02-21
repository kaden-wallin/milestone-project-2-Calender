import { useRouter } from 'react-router';
import { useState } from 'react';
import useCreateUser from './Hooks/useCreateUser';
import { create } from 'domain';


export default function Register() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const createUserMutation = useCreateUser({
        email,
        password
    })

    if (createUserMutation.isSuccess) {
        router.push("/")
    }
  

    return (
        <div className= "min-h-screen grid place-items-center text-xl">
            <div className= "w-2/3 lg:w-1/3 shadow-lg flex flex-col items-center">
                <h1 className="text-4xl font-semibold"> Sign Up </h1>
                    <div className="mt-8 w-full lg:w-auto px-4">
                        <p> Name </p>
                        <input type='text' className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto" />
                    </div>
                    <div className="mt-8 w-full lg:w-auto px-4">
                        <p> Email </p>
                        <input 
                            type= 'text'
                            className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto"
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-8 w-full lg:w-auto px-4">
                        <p> Password </p>
                        <input 
                            type= 'password'
                            className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className= "my-8 w-full lg:w-auto px-4">
                        <p> Username </p>
                        <input 
                            type='text'
                            className="h-8 focus:outline-none shadow-sm border p-4 rounded mt-2 w-full lg:w-auto" />
                    </div>
                    <div className="mb-8 w-1/5">
                     {createUserMutation.isError && <p className = "text-sm mb-8 text-red-500">{createUserMutation.error.message}</p>}   
                        <button 
                            className="bg-blue-500 text-white px-8 py-2 rounded w-full"
                            onClick={() => createUserMutation.mutate()}>
                                {createUserMutation.isLoading?
                                    <span>
                                        <Loader 
                                            height={30}
                                            width={30}
                                        />
                                    </span> :
                                <span> Sign Up </span>
                                }   
                            </button>
                                
                    </div>
            </div>
        </div>
    )
}
