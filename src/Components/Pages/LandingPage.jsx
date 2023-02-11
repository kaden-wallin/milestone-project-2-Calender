import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <Link to = '/choose'>
            <button varientColor = 'blue' className = '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700' type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage