import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className=' text-center' >
        <Link to = '/choose' >
            <button varientcolor = 'blue' className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 t  text-green-500' type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage