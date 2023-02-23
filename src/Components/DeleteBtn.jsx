import { Button } from "@material-tailwind/react";
import React from 'react';

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', async () => {
  const eventId = deleteButton.dataset.ID;
  try {
    const response = await fetch(`/events/${eventId}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data.message);
    
  } catch (err) {
    console.error(err.message);
  }
});

export default deleteButton;