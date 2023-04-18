import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface EventProps {
  title: string;
  location: string;
  description: string;
  date: string;
}

function Event() {
  const [showButton, setShowButton] = useState<boolean>(true);
  const { eventId } = useParams<{ eventId: string }>();
  const [eventInfo, setEventInfo] = useState<EventProps>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://milestone-project-2-calender-backend-test-hd9u50k1b.vercel.app/api/events/${eventId}`);
        const eventData = await response.json();
        setEventInfo(eventData);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData();
  }, [eventId]);

  // err message
  if (!eventInfo) {
    console.log('id:');
    return <div>Page Not Found</div>;
  }

  console.log(eventInfo);

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-[150px] ">
        <header className="text-2xl font-bold mb-4">{eventInfo.title}</header>
        <main>
          <h2 className="text-lg font-bold mb-2">{eventInfo.location}</h2>
          <h3 className="text-lg my-4">{eventInfo.description}</h3>
          <p className="text-gray-600">{eventInfo.date}</p>
        </main>
      </div>
    </div>
  );
}

export default Event;
