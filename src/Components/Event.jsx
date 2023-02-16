import { useState, useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'


function Event(props) { // we're going to pass some sort of props in the future

    const [showButton, setShowButton] = useState(true)
    const path = useLocation()

    const eventTitle = { title: 'event title'} //I'm assuming this will eventually be an object we use to get data from the DB


    useEffect(() => {
        if (path.pathname === '/calender') {
          setShowButton(false);
        }
      }, [path.pathname]);

  return (
    <div className=' text-center'>
        {showButton && <GoBackBtn />}
        <div>
            {eventTitle.title}

        </div>
    </div>
  )
}

export default Event