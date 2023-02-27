import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


function Calender() {
  const navigate = useNavigate()

  const [eventInfo, setEventInfo] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://milestone-project-2-calender-backe-git-35a6b0-mile-stone-2-team.vercel.app/api/events`);
      const eventData = await response.json();
      const newArr = eventData.map((evt) => {
        const { event_ID: id, event_title: title, event_location: location, event_date: date } = evt;
        return { id, title, location, date }
      })
      setEventInfo(newArr);
      console.log('eventData', eventData)
      console.log('eventInfo:', eventInfo);
    }

    fetchData();
  }, []);

  console.log('eventInfo:', eventInfo)

  const eventParam = (event) => {
    return event.id;
  }

  // creates path for each item in the calender
  const handleNavigateClick = (eventClickInfo) => {
    const event = eventClickInfo.event;
    const eventId = eventParam(event);
    navigate(`/events/${eventId}`);
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={eventInfo}
      eventContent={eventInfo.title}
      selectable={true}
      eventClick={handleNavigateClick}
      eventColor={'red'}
    />

  )
}

export default Calender