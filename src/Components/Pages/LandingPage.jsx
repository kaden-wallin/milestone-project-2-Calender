import { Link } from 'react-router-dom'
import { Login } from './Page Components/Login'
import { Register } from './Page Components/Register'
import { useState } from 'react';

function LandingPage() {
  const [currentForm, setCurrentForm] = useState('login');
  const [showForm, setShowForm] = useState(false);


  const toggleForm= (formName) => {
    setCurrentForm(formName)
    setShowForm(true)
  }

  return (
      
    <div className=' text-center' >
        <Link to = '/choose' >
            <button className = 'm-14 inline-flex items-center justify-center rounded-full p-8 t mt-64 bg-white text-9xl text-red-600 hover:bg-red-600 hover:text-white' type = 'button'>Start</button>
        </Link>
      <div>
      {showForm &&
          (currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)
        }
        </div>
        <div>
        {!showForm && (
        <Link className='text-slate-200 hover:text-white' to="#" onClick={() => setShowForm(true)}>
          Log In or Sign Up here
        </Link>
      )}
        </div>
    </div>
  )
}

export default LandingPage