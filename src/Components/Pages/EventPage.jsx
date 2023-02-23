import React from 'react'
import { useState, useEffect } from 'react'
import Event from '../Event';
import { useParams, Link } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn';
import DeleteButton from '../DeleteBtn';
import { Button } from "@material-tailwind/react";


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
        <div className='flex flex-row justify-center my-5 space-x-4'>
          <Link to= {`/update/${id}`}>
            <Button className='bg-white text-black rounded-full p-5 px-11 hover:bg-blue-500 hover:text-white'> Update </Button>
          </Link>

          <DeleteButton eventId={id} /> 
        </div>
    </div>
  )
}

export default EventPage