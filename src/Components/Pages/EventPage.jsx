import React from 'react'
import { useState, useEffect } from 'react'
import Event from '../Event';
import { useParams } from 'react-router-dom';

function EventPage() {
    const [eventInfo, setEventInfo] = useState({})

    const { id } = useParams();

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`http://localhost:4002/api/events/${id}`);
        const eventData = await response.json();
        // const { event_ID: id, event_title: title, event_location: location, event_date: date } = eventData;
        // return { id, title, location, date }        
        setEventInfo(eventData);
      }
  
      fetchData();
    }, [id]);

  return (
    <div>
        <Event 
        key={id} 
        id={eventInfo.event_ID} 
        date={eventInfo.event_date} 
        title={eventInfo.event_title} 
        location={eventInfo.event_location} 
        />   
    </div>
  )
}

export default EventPage