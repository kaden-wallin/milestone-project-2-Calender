import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { Login } from './Page Components/Login';
import { Register } from './Page Components/Register';






export default function LandingPage() {
  const [currentForm, setCurrentForm ] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
 

  return ( 
    <div className=' text-center' >
    <h1> Welcome to Tru-gle Calendar: Meets Commune </h1>
        { currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>}
        <Link to = '/choose' >
            <button varientcolor = 'blue' className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 t  text-green-500' type = 'button'>Start</button>
        </Link>

    </div>
  )
  }
