import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <Link to = '/choose'>
            <button className='' type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage