import React, { useState } from "react";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";
import { toast } from "react-toastify";
import styled from "styled-components";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${EXCHANGE_URLS}/contatc-us`, {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setResponseMessage("Thank you for contacting us!");
        toast.success("Thankyou for contacting us")
      } else {
        setResponseMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Error submitting contact form:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Root>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="text_div">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="text_div">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="text_div">
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
    </Root>
  );
};

export default ContactUs;
const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  h2{
    margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:10px 40px ;
    padding: 0px 40px;
    width: 80%;
  }
  .text_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 80%;
    input,
    textarea ,label{
      height: 50px;
      padding: 10px;
      width: 80%;
    }
  }
  button {
    margin: 10px;
    background-color: #000;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 50px;
    width: 200px;
    padding: 13px 38px;
    font-size: 18px;
    text-transform: capitalize;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #fff;
      color: #000;
      transition-duration: 0.5s;
    }
  }
  @media (max-width:797px){
    form{
        width: 100%;
        padding: 0px 10px;
        margin: 0px 10px;
        .text_div{
            width: 100%;
            input,
            textarea ,label{
                width: 93%;}
        }
    }
  }
`;
