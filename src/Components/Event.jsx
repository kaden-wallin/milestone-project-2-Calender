import { useState, useEffect } from 'react'
import {  useLocation, useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import deleteButton from './DeleteBtn'


function Event(props) { // we're going to pass some sort of props in the future
    
   const [showButton, setShowButton] = useState(true)

    const path = useLocation()

    const { title } = useParams();

    // gets object based on the param name
   // prevents btn from rendering in the calender
     useEffect(() => {
       if (path.pathname === '/calender') {
         setShowButton(false);
       }
     }, [path.pathname])

     // err message
       if (!props) {
        console.log('id:', title);
          return <div>Page Not Found</div>
       }
     
  return (
    <div>
         {showButton && <GoBackBtn />} 
      <header>
        {props.title}
      </header>
      <main>
        <h2>
        {props.location}
        </h2>
        <p className="text-gray-600">
          {props.date}
        </p>
        <button id={deleteButton} data-id={props.event_ID}>Delete</button>
      </main>
    </div>
  )
}

export default Event