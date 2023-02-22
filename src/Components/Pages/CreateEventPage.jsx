import GoBackBtn from '../GoBackBtn'

function CreateEventPage() {
  function handleSubmit(event) {
    event.preventDefault()

    // Extract the form data
    const formData = {
      title: document.getElementById('event-title').value,
      date: document.getElementById('choose-date').value,
      location: document.getElementById('location').value,
    }

    // Make the API call
    fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          alert('Event added successfully!')
          // TODO: Reset the form
        } else {
          alert('Failed to add event')
        }
      })
      .catch(error => {
        alert('An error occurred while adding the event')
        console.error(error)
      })
  }

  return (
    <div>
      <GoBackBtn />
      <form onSubmit={handleSubmit}>
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
