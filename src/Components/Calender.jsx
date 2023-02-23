import FullCalendar from '@fullcalendar/react'
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import { useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';


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

  const eventParam = (event) => {
    return event.id;
  }

  // creates path for each item in the calender
  const handleNavigateClick = (eventClickInfo) => {
    const event = eventClickInfo.event;
    const eventId = eventParam(event);
    navigate(`/event/${eventId}`);
  }

    return (
        <FullCalendar
        plugins = {[ dayGridPlugin, interactionPlugin, adaptivePlugin, listPlugin, timeGridPlugin, ]}
        initialView = "dayGridMonth"
        events = {eventInfo}
        eventContent = {eventInfo.title}
        selectable = {true}
        eventClick = {handleNavigateClick}
        eventColor = {'red'}
        themeSystem = {'simplex'}
      /> 
         
    )
    
  }
  
  export default Calender