import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import GoBackBtn from '../GoBackBtn';

const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)

function CreateEventPage() {
  const navigate = useNavigate()

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
      alert('Failed to add event')
      console.error(error.message)
    } else {
      alert('Event added successfully!')

    // REDIRECTS TO THE CALENDAR PAGE
      navigate('/calender') 
    }
  }

  return (
    <div className=' text-center  m-auto w-auto items-center  justify-between font-bold bg-red-400'>
      <GoBackBtn />
      <form onSubmit={handleSubmit} className= 'items-center justify-center rounded-md text-center t bg-gray-50 text-2xl'>
      <label htmlFor="user-id">User ID: </label>
        <input id="user-id" type="number" />
        <label htmlFor="event-title">Event Title: </label>
        <input id="event-title" type="text" />
        <label htmlFor="choose-date">Date: </label>
        <input id="choose-date" type="date" />
        <label htmlFor="location">Event Location: </label>
        <input id="location" type="text" />
        <input type="submit" value="Add Event" />
      </form>
    </div>
  )
}

export default CreateEventPage
