import React, { useState } from 'react';
import axios from 'axios';
import { EXCHANGE_URLS } from '../URLS';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${EXCHANGE_URLS}/contatc-us`, {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setResponseMessage('Thank you for contacting us!');
      } else {
        setResponseMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Error submitting contact form:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactUs;
