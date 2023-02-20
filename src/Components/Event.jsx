import { useState, useEffect } from 'react'
import {  useLocation, useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'


function Event(props) { // we're going to pass some sort of props in the future
    
   const [showButton, setShowButton] = useState(true)

    const path = useLocation()

    const { title } = useParams();

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
        <p>
          {props.date}
        </p>
      </main>
    </div>
  )
}

export default Event