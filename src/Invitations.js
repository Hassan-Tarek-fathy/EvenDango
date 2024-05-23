import React, { useState } from 'react';

const EventInvitation = () => {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');

  const sendInvitation = async (e) => {
    e.preventDefault(); // Prevents the default form submit action
    try {
      const eventDetails = {
        title, // Add default values for date and location if needed
        date: '2024-05-20', // Example default date
        location: 'Hurghada, Egypt' // Example default location
      };

      const response = await fetch('/api/send-invitation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          eventDetails,
        }),
      });

      const data = await response.json();
      console.log(data);
      alert('Invitation sent successfully!');
    } catch (error) {
      console.error('Error sending invitation:', error);
      alert('Failed to send invitation.');
    }
  };

  return (
    <form onSubmit={sendInvitation} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <h2>Send Event Invitation</h2>
      <label>
        Recipient's Email:
        <input
          type="email"
          placeholder="Enter recipient's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Event Title:
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Invitation</button>
    </form>
  );
};

export default EventInvitation;
