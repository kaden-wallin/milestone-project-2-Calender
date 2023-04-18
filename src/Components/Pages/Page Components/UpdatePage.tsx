import { useState, useEffect } from 'react';
import UpdateEvent from './UpdateEvent';
import { useParams } from 'react-router-dom';
import GoBackBtn from '../../GoBackBtn';

type EventInfo = {
  event_ID: number;
  event_date: string;
  event_title: string;
  event_location: string;
  user_ID: number;
};

function UpdatePage() {
  const [eventInfo, setEventInfo] = useState<EventInfo>({});

  const { id } = useParams<{ id: string }>(); // grabs id from the url

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://milestone-project-2-calender-backend-test-hd9u50k1b.vercel.app/events/${id}`);
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
  );
}

export default UpdatePage;