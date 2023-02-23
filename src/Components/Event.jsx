import { useState, useEffect } from 'react'
import {  useLocation, useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'


function Event(props) { // we're going to pass some sort of props in the future
    
   const [showButton, setShowButton] = useState(true)

<<<<<<< HEAD
  const handleDelete = () => {
    events.delete('/:id', async (req, res) => {
      try {
          const deletedEvents = await Event.destroy({
             where: {
                  event_id: req.params.id
              }
          })
          res.status(200).json({
              message: `Successfully deleted ${deletedEvents} event(s)`
          })
      } catch(err) {
          res.status(500).json(err)
      }
        })
    // assuming the API call returns success, redirect to home page
    navigate('/calender')
  }
=======
    const path = useLocation()
>>>>>>> c9a1d273a4164fe23e56cda7aaaa6dc0cd0d77a3

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
      </main>
    </div>
  )
}

export default Event