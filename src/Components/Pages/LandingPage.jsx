import { Link } from 'react-router-dom'
import { Login } from './Page Components/Login'
import { Register } from './Page Components/Register'

function LandingPage() {
  return (
    <div className=' text-center' >
        <Link to = '/choose' >
            <button className = '-m-2.5 inline-flex items-center justify-center rounded-full p-8 t mt-64 bg-white text-9xl text-red-600 hover:bg-red-600 hover:text-white' type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage