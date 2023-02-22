import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage';
import ChoosePage from './Components/Pages/ChoosePage';
import CreateEventPage from './Components/Pages/CreateEventPage';
import CalenderPage from './Components/Pages/CalenderPage';
import Event from './Components/Event';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4002/backend")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  console.log(message)

  return (
    <div >
        <Routes className="bg-red-600">
          <Route path='/' element={<LandingPage />}/>  
          <Route path='/choose' element={<ChoosePage />}/>
          <Route path='/createevent' element={<CreateEventPage />}/>
          <Route path = '/calender'   element={<CalenderPage />}/>
          <Route path='/event' element={<Event />}/> {/*The path should be some sort of params.name */}
        </Routes>  
    </div>
  );
}

export default App;