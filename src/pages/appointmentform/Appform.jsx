import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";
import './appform.scss';

const AppointmentForm = () => {
  const navigate = useNavigate()

  // State variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add the appointment to the "appointments" collection in Firestore
      const appointmentRef = await addDoc(collection(db, 'appointments'), {
        name,
        email,
        date,
        time,
      });
      
      console.log(`Appointment added with ID: ${appointmentRef.id}`);
      // Navigate back to the list of appointments
      navigate(-1)
    } catch (error) {
      console.error('Error adding appointment: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>Add an Appointment</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
