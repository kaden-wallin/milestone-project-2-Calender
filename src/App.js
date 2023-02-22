import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage';
import ChoosePage from './Components/Pages/ChoosePage';
import CreateEventPage from './Components/Pages/CreateEventPage';
import CalenderPage from './Components/Pages/CalenderPage';
import EventPage from './Components/Pages/EventPage';
import { Component } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

function App({ Component, pageProps }) {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <div >
        <Routes className="bg-red-600">
          <Route path='/' element={<LandingPage />}/>  
          <Route path='/choose' element={<ChoosePage />}/>
          <Route path='/createevent' element={<CreateEventPage />}/>
          <Route path = '/calender'   element={<CalenderPage />}/>
          <Route path='/event/:id' element={<EventPage />}/>
        </Routes>  
    </div>
    </>
  );
}

export default App;