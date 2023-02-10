import React, { createElement, useState } from 'react'
import { Link } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'


function Event(props) { // we're going to pass some sort of props in the future
    // const [hideData, setHideData] = useState(false)

    // const handleHideData = () => {
    //     if(window.path = '/calender') {
    //         setHideData(true)
    //     } else {
    //         setHideData(false)
    //     }
    // }

    // ^ this is psuedo code for an idea to prevent all the data from being displayed while the component is being displayed in the /calender page
    //Update!! the logic above might not be necassary

    const eventTitle = { title: 'event title'}

    const backBtn = () => {
        if(window.path = '/event') {
            createElement( <GoBackBtn />)
        } else {
            
        }
    }

    //Another piece of sudo code to stop the button from rendering in the calender page

  return (
    <div>
        <div>
            {eventTitle.title}

        </div>
    </div>
  )
}

export default Event