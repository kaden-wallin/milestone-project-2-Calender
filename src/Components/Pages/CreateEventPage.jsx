import GoBackBtn from '../GoBackBtn'

function CreateEventPage() {
  return (
    <div>
        <GoBackBtn />
        <div class= 'container flex flex-wrap justify-center items-center -mx-3 mb-6'>
        <form class="w-full max-w-lg ">
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