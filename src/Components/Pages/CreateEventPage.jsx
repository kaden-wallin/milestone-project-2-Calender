import { createClient } from '@supabase/supabase-js'
import GoBackBtn from '../GoBackBtn';

const supabaseUrl = process.env.DB_HOST
const supabaseKey = process.env.DB_API_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

function CreateEventPage() {
  async function handleSubmit(event) {
    event.preventDefault()

    //EXTRACT THE FORM DATA
    const formData = {
      title: document.getElementById('event-title').value,
      date: document.getElementById('choose-date').value,
      location: document.getElementById('location').value,
    }

    //MAKE THE API CALL

    //data needs to be added back in below to the error bracket
    const {  error } = await supabase
      .from('events')
      .insert(formData)

    if (error) {
      alert('Failed to add event')
      console.error(error)
    } else {
      alert('Event added successfully!')
    }
  }

  return (
    <div>
        <GoBackBtn />
        <div class= 'container flex flex-wrap justify-center items-center -mx-3 mb-6'>
        <form class="w-full max-w-lg " onSubmit={handleSubmit}>
          <div class='flex flex-wrap justify-center items-center -mx-3 mb-6 '>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "event-title">Event Title</label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-cyan-300 rounded 
            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id = 'event-title' type = 'text' ></input>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class= "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "choose-date">Date</label>
            <input class= "appearance-none block w-full bg-gray-200 text-gray-700 border border-cyan-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id = 'choose-date' type = 'date' >

            </input>
          </div>
          <div class= 'w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label class= 'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor = "location">Event Location</label>
            <input class= 'appearance-none block w-full bg-gray-200 text-gray-700 border border-cyan-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"'
             id = 'location' type = 'text' ></input>
          </div>
          </div>
        </form>
    </div>
    </div>
  )
}

export default CreateEventPage
