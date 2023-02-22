import { Link } from 'react-router-dom'
import { Login } from './Page Components/Login'
import { Register } from './Page Components/Register'

function LandingPage() {
  return (
    <div className=' text-center' >
        <Link to = '/choose' >
            <button varientcolor = 'blue' className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 t mt-64 bg-gray-300 text-9xl text-green-500' type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage