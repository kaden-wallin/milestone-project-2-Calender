import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage';
import ChoosePage from './Components/Pages/ChoosePage';
import CreateEventPage from './Components/Pages/CreateEventPage';
import CalenderPage from './Components/Pages/CalenderPage';
import Event from './Components/Event';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />}/>  
          <Route path='/choose' element={<ChoosePage />}/>
          <Route path='/createevent' element={<CreateEventPage />}/>
          <Route path='/calender' element={<CalenderPage />}/>
          <Route path='/event' element={<Event />}/> {/*The path should be some sort of params.name */}
        </Routes>  
    </div>
  );
}

export default App;
//Kaden was here