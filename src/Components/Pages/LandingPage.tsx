import { Link } from 'react-router-dom';
import { Login } from './Page Components/Login';
import { Register } from './Page Components/Register';
import { useState } from 'react';

function LandingPage() {
  const [currentForm, setCurrentForm] = useState<'login' | 'register'>('login');
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (formName: 'login' | 'register') => {
    setCurrentForm(formName);
    setShowForm(true);
  };

  return (
    <div className='text-center'>
      <Link to='/choose'>
        <button
          className='m-14 inline-flex items-center justify-center rounded-full p-8 t mt-64 bg-red-600 text-white text-9xl text-red-600 hover:bg-white hover:text-red-500 hover:transform hover:scale-110 transition duration-300'
          type='button'
        >
          Start
        </button>
      </Link>
      {/* Decide as group if we wanna keep this link */}
      {/* <div>
        {showForm &&
          (currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />)
        }
      </div>
      <div>
        {!showForm && (
          <Link className='text-slate-200 hover:text-white hover:uppercase' to='#' onClick={() => setShowForm(true)}>
            Log In or Sign Up here
          </Link>
        )}
      </div> */}
    </div>
  );
}

export default LandingPage;