import GoBackBtn from '../GoBackBtn'

function CreateEventPage() {

  function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior
    console.log('Form submitted');


    // get the form data
    const formData = new FormData(event.target);

    // send an HTTP request to the server
    fetch('http://localhost:4002/api/events', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      // handle the response from the server
      console.log(response);
    })
    .catch(error => {
      // handle any errors that occur
      console.error(error);
    });
  }

  return (
    <div>
        <GoBackBtn />
        <form onSubmit={handleSubmit}>
            <label htmlFor="event-title">Event Title</label>
            <input id="event-title" type="text" name="title" required />
            <label htmlFor="choose-date">Date</label>
            <input id="choose-date" type="date" name="date" required />
            <label htmlFor="location">Event Location</label>
            <input id="location" type="text" name="location" required />

            <label htmlFor="event-ID">Event ID</label>
            <input id="event-ID" type="text" name="eventID" required />
            <label htmlFor="user_ID">User ID</label>
            <input id="user_ID" type="text" name="userID" required />

            <input type="submit" value="Create Event" />
        </form>
    </div>
  );
}

export default CreateEventPage;