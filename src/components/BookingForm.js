// src/components/BookingForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ selectedDate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [eventCreated, setEventCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      summary: 'Consulta Legal',
      location: '123 Main St, Ciudad',
      description: 'Consulta con la abogada',
      start: {
        dateTime: selectedDate.toISOString(),
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: new Date(selectedDate.getTime() + 60 * 60 * 1000).toISOString(), // Evento de 1 hora
        timeZone: 'America/Los_Angeles',
      },
      attendees: [{ email }],
      reminders: { useDefault: true },
    };

    try {
      await axios.post('http://localhost:5000/create-event', event);
      setEventCreated(true);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h2>Reserva tu turno</h2>
      {selectedDate && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirmar Reserva</button>
        </form>
      )}
      {eventCreated && <p>¡Reserva confirmada!</p>}
    </div>
  );
};

export default BookingForm;
