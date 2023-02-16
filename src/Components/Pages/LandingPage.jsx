import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='text-center' >
        <Link to = '/choose' >
            <button varientcolor = 'blue'  type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage