import React from 'react'
import { Link } from 'react-router-dom'

function GoBackBtn() {
    const previousPage = '/'

    // create logic that saves the previous page as some sort of variable and have the path be that variable
  return (
    <div>
        <Link to = {previousPage}>
            <button>Go Back</button>
        </Link>
    </div>
  )
}

export default GoBackBtn