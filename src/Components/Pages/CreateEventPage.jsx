import GoBackBtn from '../GoBackBtn'

function CreateEventPage() {

  //Potential over engineered idea. Get the inputs from the form assign them to a useState variable input those variables to an object turns into json and send that to the db.

  async function handleSubmit(event) {
    try {
      event.preventDefault(); 
      console.log('Form submitted');
  
      // get the form data
      const formData = new FormData(event.target);
  
      const res = await fetch('http://localhost:4002/api/events', {
        method: 'POST',
        body: formData
      });
  
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
        <GoBackBtn />
        <form id='create-event-form' onSubmit={handleSubmit}>
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