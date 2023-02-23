import { useState, useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import events from '../controller/event_controller'

function Event(props) {
  const [showButton, setShowButton] = useState(true)
  const path = useLocation()
  const { title } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (path.pathname === '/calender') {
      setShowButton(false)
    }
  }, [path.pathname])

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

  if (!props) {
    console.log('id:', title)
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
        <button onClick={handleDelete}>Delete</button>
      </main>
    </div>
  )
}

export default Event