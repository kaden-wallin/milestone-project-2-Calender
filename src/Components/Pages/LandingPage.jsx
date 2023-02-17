import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useUser , useSupabaseClient } from "@supabase/auth-helpers-react"





function LandingPage() {
  const [ email, setEmail ] = useState("");
  const user = useUser();
  const supabase = useSupabaseClient();
  console.log(email)

  async function sendLoginLink() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email
    })

    if(error) {
      alert("Error. Please retry Email Address!")
      console.log(error)
    } else {
      alert("Please check your email ")
    }
    }
  
  
  return ( 
    <div className=' text-center' >
      { user === null ?
      <>
      <h1> Welcome to The Calndaer </h1>
      <form>
        <label htmlFor='Email' type= 'email' onChange={(e) => setEmail(e.target.value)}> Enter your email here </label>
        <input id='user_email' type='text'></input>
        <Button onClick={() => sendLoginLink()}> Get Your Login Link! </Button>
      </form>
      </>
      :
      <>
      <h1> Welcome back! </h1>
        <Link to = '/choose' >
            <button varientcolor = 'blue' className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 t  text-green-500' type = 'button'>Start</button>
        </Link>
      </>
      }
    </div>
  )
    }

export default LandingPage