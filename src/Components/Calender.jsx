import FullCalendar from '@fullcalendar/react' // must go before plugins
 import  {Calendar}  from '@fullcalendar/core'; // also dont know what it does
import adaptivePlugin from '@fullcalendar/adaptive'; // premium plugin
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';// dont know what it does
import timeGridPlugin from '@fullcalendar/timegrid'; // dont know what it does

import { useNavigate } from 'react-router-dom'

function Calender() {
    const navigate = useNavigate()

    const handleClick = () => { 
      navigate('/event')
    }


    const events = [
        {
            title :  'event 1', 
            date: '2023-02-18'
        }
    ]

    return (
        <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        events = {events}
        eventContent = {eventData}
        selectable = {true}
        eventClick = {handleClick}
      /> 
         
    )
    
  }

  function eventData(eventInfo) {
    return (
        <div >
            <b >{eventInfo.event.date}</b>
            <i>{eventInfo.event.title}</i>
        </div>
    )
  }
  
  export default Calender