import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage';
import ChoosePage from './Components/Pages/ChoosePage';
import CreateEventPage from './Components/Pages/CreateEventPage';
import CalenderPage from './Components/Pages/CalenderPage';
import EventPage from './Components/Pages/EventPage';
import { useState } from 'react';



function App() {

  return (
    <div className=" bg-red-600 min-h-screen">
        <Routes>
          <Route path='/' element={<LandingPage />}/>  
          <Route path='/choose' element={<ChoosePage />}/>
          <Route path='/createevent' element={<CreateEventPage />}/>
          <Route path = '/calender'   element={<CalenderPage />}/>
          <Route path='/event/:id' element={<EventPage />}/>        </Routes>  
    </div>
    
  );
}

export default App;