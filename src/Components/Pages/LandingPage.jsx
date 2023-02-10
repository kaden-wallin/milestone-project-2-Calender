import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <Link to = '/choose'>
            <button type = 'button'>Start</button>
        </Link>
    </div>
  )
}

export default LandingPage