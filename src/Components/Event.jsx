import { useState, useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'


function Event(props) { // we're going to pass some sort of props in the future

    const [showButton, setShowButton] = useState(true)
    const path = useLocation()

    const eventTitle = { event_title: 'event title'} //I'm assuming this will eventually be an object we use to get data from the DB

    const { title, date } = props


    useEffect(() => {
        if (path.pathname === '/calender') {
          setShowButton(false);
        }
      }, [path.pathname]);

      // console.log(title)
  return (
    <div>
        {showButton && <GoBackBtn />}
        <div>
            {props.title}
        </div>
    </div>
  )
}

export default Event