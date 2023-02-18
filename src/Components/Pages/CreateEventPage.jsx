import GoBackBtn from '../GoBackBtn'





function CreateEventPage() {
  const newEvent = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
        <GoBackBtn />
        <form>
            <label htmlFor = "event-title">Event Title</label>
            <input id = 'event-title' type = 'text' ></input>
            <label htmlFor = "choose-date">Date</label>
            <input id = 'choose-date' type = 'date' ></input>
            <label htmlFor = "location">Event Location</label>
            <input id = 'location' type = 'text' ></input>
        </form>
    </div>
  )
}

export default CreateEventPage