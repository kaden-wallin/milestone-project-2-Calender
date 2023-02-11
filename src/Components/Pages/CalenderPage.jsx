import React from 'react'
import Event from '../Event'
import { Link } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn'

function CalenderPage() {
  return (
    <div>
        <GoBackBtn />
        <div>
            Calender
        </div>
        <div>
            <Link to = '/event'>
                <Event />
            </Link>
        </div>
    </div>
  )
}

export default CalenderPage