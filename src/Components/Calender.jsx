import FullCalendar from '@fullcalendar/react'
import  {Calendar}  from '@fullcalendar/core';
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';// dont know what it does
import timeGridPlugin from '@fullcalendar/timegrid'; // dont know what it does
import Event from './Event';

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { identity } from '@fullcalendar/core/internal';

function Calender() {
  const navigate = useNavigate()

  const [eventInfo, setEventInfo] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4002/api/events');
      const eventData = await response.json();
      const newArr = eventData.map((evt) => {
        const { event_ID: id, event_title: title, event_location: location, event_date: date } = evt;
        return { id, title, location, date }
      })
      setEventInfo(newArr);
    }

    fetchData();
  }, []);


    const handleNavigateClick = () => { 
      navigate('/event')
    }



    return (
        <div className="container mx-auto px-4">
          <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          events = {eventInfo}
          eventContent = {({ event }) => <Event key={event.id} id={event.id} date={event.date} title={event.title} location={event.location} />}
          selectable = {true}
          eventClick = {handleNavigateNavigateClick}
        />
      </div> 
         
    )
    
  
  }
  
  
  export default Calender