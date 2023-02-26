import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'

function DeleteButton({ eventId }) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://milestone-project-2-calender-backe-git-fa2279-mile-stone-2-team.vercel.app/api/events/${eventId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setMessage(data.message);

      // REDIRECTS TO THE CALENDAR PAGE
      navigate('/calender')
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Button className="bg-white text-red-600 rounded-full p-5 px-11 hover:bg-red-500 hover:text-white" id="deleteButton" onClick={handleDelete}>
        Delete
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteButton;