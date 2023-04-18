import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://keztfhsconadyzpjouyc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlenRmaHNjb25hZHl6cGpvdXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNTE5NDUsImV4cCI6MTk5MTkyNzk0NX0.Klp0MeA68AP0nNonvKmn1wDh_RZL-HoMtexKYUSaEB8"

const supabase = createClient(supabaseUrl, supabaseKey)

interface UpdateEventProps {
  id: string
}

function UpdateEvent(props: UpdateEventProps): JSX.Element {
  const [message, setMessage] = useState('');
  const updatedEventPage = useNavigate()
  const loginInfo = JSON.parse(sessionStorage.getItem("login info"))

  const { id } = useParams<{ id: string }>()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = {
      user_ID: loginInfo ? loginInfo.user_ID : 1,
      event_title: document.getElementById('event-title')!.value,
      description: document.getElementById('description')!.value,
      event_date: document.getElementById('choose-date')!.value,
      event_location: document.getElementById('location')!.value,
    }

    const { data, error } = await supabase
      .from('events')
      .update(formData)
      .eq('event_ID', props.id)


    if (error) {
      setMessage('There was an error editing the item.');
      console.error(error.message)
    } else {
      setMessage('Item edited successfully!');

      // REDIRECTS TO THE EVENT PAGE
      updatedEventPage(`/event/${props.id}`)
    }
  }


  return (
    <div className=' text-center  m-auto w-auto items-center  justify-between font-bold bg-red-500'>
      <div class='container flex flex-wrap justify-center items-center m-auto w-auto'>
        <form method='POST' action={`https://milestone-project-2-calender-backend-test-hd9u50k1b.vercel.app/api/events/${id}?_method=PUT`} class='w-full max-w-lg' onSubmit={handleSubmit}>
          <div class='flex flex-wrap justify-center items-center -mx-3 mb-6 '>
            {/* <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block tracking-wide text-black-200 text-xl font-bold mb-2"  htmlFor="user-id">User ID: </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="user-id" type="number" placeholder={props.user_id} />
          </div> */}
            <div class="w-full md:w-1/2 px-3">
              <label class="block tracking-wide text-black-700 text-xl font-bold mb-2" htmlFor="event-title">Event Title: </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="event-title" type="text" placeholder={props.title} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block tracking-wide text-black-700 text-xl font-bold mb-2" htmlFor="description">Description: </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="description" type="text" placeholder={props.description} />
            </div>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='block tracking-wide text-black-700 text-xl font-bold mb-2' htmlFor="choose-date">Date: </label>
              <input class='appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="choose-date" type="date" placeholder={props.date} />
            </div>
            <div class='flex flex-wrap -mx-3 mb-2'>
              <label class='block tracking-wide text-black-700 text-xl font-bold mb-2' htmlFor="location">Event Location: </label>
              <input class='appearance-none block w-full bg-gray-200 text-gray-700 border border-rose-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="location" type="text" placeholder={props.location} />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input class="appearance-none block w-full bg-gray-200 text-black-700 border border-rose-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:bg-blue-500 hover:text-white" type="submit" value="Update Event" />
            </div>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  )
}

export default UpdateEvent

