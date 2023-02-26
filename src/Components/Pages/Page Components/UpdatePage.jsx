import { useState, useEffect } from 'react'
import UpdateEvent from './UpdateEvent'
import { useParams } from 'react-router-dom'
import GoBackBtn from '../../GoBackBtn';

function UpdatePage() {
  const [eventInfo, setEventInfo] = useState({})

  const { id } = useParams(); // grabs id from the url 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://milestone-project-2-calender-backend2.vercel.app/api/events/${id}`);
      const eventData = await response.json();
      setEventInfo(eventData);
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <GoBackBtn />
      <UpdateEvent
        key={id}
        id={eventInfo.event_ID}
        date={eventInfo.event_date}
        title={eventInfo.event_title}
        location={eventInfo.event_location}
        user_id={eventInfo.user_ID}
      />
    </div>
  )
}

export default UpdatePage