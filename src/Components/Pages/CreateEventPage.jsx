import GoBackBtn from '../GoBackBtn'

function CreateEventPage() {
  return (

    <div className=' text-center  m-auto w-auto items-center  justify-between font-bold '>
      <GoBackBtn />
      <form onSubmit={handleSubmit} className= 'items-center justify-center rounded-md text-center t bg-gray-50 text-2xl'>
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
