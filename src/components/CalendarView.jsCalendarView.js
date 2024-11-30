// src/components/CalendarView.js

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import './CalendarView.css';

const CalendarView = ({ onDateSelect }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
        minDate={new Date()}
      />
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id}>
            <h4>{event.summary}</h4>
            <p>{new Date(event.start.dateTime).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
