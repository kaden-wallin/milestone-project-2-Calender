import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn';
import React, { useState } from 'react';

const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)

function CreateEventPage() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()

    //EXTRACTS THE FORM DATA
    const formData = {
      user_ID: document.getElementById('user-id').value,
      event_title: document.getElementById('event-title').value,
      event_date: document.getElementById('choose-date').value,
      event_location: document.getElementById('location').value,
    }

    //MAKES THE API CALL
    const { data, error } = await supabase
      .from('events')
      .insert(formData)

    if (error) {
      setMessage('There was an error creating the event.');
      console.error(error.message)
    } else {
      setMessage("I'll add that to the calendar!");

    // REDIRECTS TO THE CALENDAR PAGE
      navigate('/calender') 
    }
  }

  return (
    <div>
      <GoBackBtn />
    <div className=' text-center  m-auto w-auto items-center  justify-between font-bold bg-red-500'>
      <div class='container flex flex-wrap justify-center items-center m-auto w-auto'>
      <form onSubmit={handleSubmit} class= 'w-full max-w-lg'>
      <div class='flex flex-wrap justify-center items-center -mx-3 mb-6 '>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block tracking-wide text-black-200 text-xl font-bold mb-2 "  htmlFor="user-id">User ID: </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="user-id" type="number" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class= "block tracking-wide text-black-700 text-xl font-bold mb-2" htmlFor="event-title">Event Title: </label>
            <input class= "appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
           id="event-title" type="text" />
          </div>
          <div class= 'w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label class= 'block tracking-wide text-black-700 text-xl font-bold mb-2' htmlFor="choose-date">Date: </label>
            <input class= 'appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="choose-date" type="date" />
          </div>
          <div class= 'flex flex-wrap -mx-3 mb-2'>
            <label class= 'block tracking-wide text-black-700 text-xl font-bold mb-2' htmlFor="location">Event Location: </label>
            <input class= 'appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="location" type="text" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <input class="appearance-none block w-full bg-gray-200 text-black-700 border border-rose-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:bg-blue-500 hover:text-white"  type="submit" value="Add Event" />
          </div>
      </div>
      </form>
      </div>
      {message && <p>{message}</p>}
    </div>
    </div>
  )
}

export default CreateEventPage
