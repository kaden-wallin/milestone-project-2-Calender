import { useState, useEffect } from 'react'
import UpdateEvent from './UpdateEvent'
import { useParams } from 'react-router-dom'
import GoBackBtn from '../../GoBackBtn';

function UpdatePage() {
  const [eventInfo, setEventInfo] = useState({})

  const { id } = useParams(); // grabs id from the url 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:4002/api/events/${id}`);
      const eventData = await response.json();    
      setEventInfo(eventData);
    }

    fetchData();
  }, [id]);

  console.log("eventId:", id);
  return (
    <div>
      <GoBackBtn />
        <UpdateEvent 
        key = {id}
        id={eventInfo.event_ID} 
        /> 
    </div>
  )
}

export default UpdatePage