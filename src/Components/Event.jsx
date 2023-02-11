import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'


function Event(props) { // we're going to pass some sort of props in the future

    const [showButton, setShowButton] = useState(true)
    const path = useLocation()

    const eventTitle = { title: 'event title'}


    useEffect(() => {
        if (path.pathname === '/calender') {
          setShowButton(false);
        }
      }, [path.pathname]);

    //Another piece of sudo code to stop the button from rendering in the calender page

  return (
    <div>
        {showButton && <GoBackBtn />}
        <div>
            {eventTitle.title}

        </div>
    </div>
  )
}

export default Event