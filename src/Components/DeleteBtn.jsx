import { useState } from "react";
import { Button } from "@material-tailwind/react";

function DeleteButton({ eventId }) {
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      const response = await fetch(`/event/${eventId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Button id="deleteButton" variant="red" onClick={handleDelete}>
        Delete
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteButton;