import FullCalendar from '@fullcalendar/react' // must go before plugins
import { Calendar } from '@fullcalendar/core';
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { render } from '@fullcalendar/core/preact';

function Calender() {
    const events = [
        {
            title : 'event 1', 
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
        eventClick = {(info) => {
            const date = new Date(info.event.date);
            alert(`Date: ${date.toDateString()}`)
            
            alert(`title: ${info.event.title}`)
          }}
      />    
    )

  }

  function eventData(eventInfo) {
    return (
        <div>
            <b>{eventInfo.event.date}</b>
            <i>{eventInfo.event.title}</i>
        </div>
    )
  }
  
  export default Calender