import React, { useState, useEffect } from 'react'
import Event from '../Event';
import { useParams, Link } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn';
import DeleteButton from '../DeleteBtn';

function EventPage() {
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

  return (
    <div>
        <GoBackBtn />
        <Event 
        key={id} 
        id={eventInfo.event_ID} 
        date={eventInfo.event_date} 
        title={eventInfo.event_title} 
        location={eventInfo.event_location} 
        />
        <Link to= {`/update/${id}`}>
          <button> Update </button>
        </Link>

        <DeleteButton eventId={id} /> 
    </div>
  )
}

export default EventPage