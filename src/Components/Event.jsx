import { useState } from 'react'
import { useParams } from 'react-router-dom'
import GoBackBtn from './GoBackBtn'
import events from '../controller/event_controller'

function Event(props) {
  const [showButton, setShowButton] = useState(true)
  const path = useLocation()
  const navigate = useNavigate()

     // err message
       if (!props) {
        console.log('id:', title);
          return <div>Page Not Found</div>
       }
     
  return (
    <div className="flex justify-center">
    <div className="bg-white rounded-lg shadow-md p-[200px] ">
      <header className="text-xl font-bold mb-4">
        {props.title}
      </header>
      <main>
        <h2 className="text-lg font-bold mb-2">
        {props.location}
        </h2>
        <p className="text-gray-600">
          {props.date}
        </p>
        <button onClick={handleDelete}>Delete</button>
      </main>
    </div>
    </div>
  )
}

export default Event