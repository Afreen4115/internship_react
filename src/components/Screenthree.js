import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css'

export default function Screenthree() {
  const [show, setShow] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    showName: "",
    showTime: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Tickets booked successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      showName: "",
      showTime: "",
    });
  };

  return (
    <div className="ccard" >
      <form onSubmit={handleSubmit}>
        <h2>Book a Ticket for {show.name}</h2><br/>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <label htmlFor="showName">Show Name:</label>
        <input
          type="text"
          id="showName"
          name="showName"
          value={show.name}
          disabled
        />
        <label htmlFor="showTime">Show Time:</label>
        <select
          id="showTime"
          name="showTime"
          value={formData.showTime}
          onChange={handleInputChange}
        >
          <option value="7:00 PM">7:00 PM</option>
          <option value="9:00 PM">9:00 PM</option>
          <option value="11:00 PM">11:00 PM</option>
        </select>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
