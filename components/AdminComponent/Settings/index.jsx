"use client";

import { useState } from "react";
import "./index.css";

const Settings = () => {
  const [formData, setFormData] = useState({
    teaHouseName: "",
    email: "",
    phone: "",
    address: "",
    openingTime: "",
    closingTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Settings Saved Successfully!");
  };

  return (
    <div className="settings-page">

      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your Tea House information.</p>
      </div>

      <form className="settings-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Tea House Name</label>

          <input
            type="text"
            name="teaHouseName"
            placeholder="Enter Tea House Name"
            value={formData.teaHouseName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>

          <textarea
            name="address"
            rows="4"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="time-container">

          <div className="form-group">
            <label>Opening Time</label>

            <input
              type="time"
              name="openingTime"
              value={formData.openingTime}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Closing Time</label>

            <input
              type="time"
              name="closingTime"
              value={formData.closingTime}
              onChange={handleChange}
            />
          </div>

        </div>
<div className="button-container">
        <button type="submit" className="save-btn">
          Save Changes
        </button>
</div>
      </form>

    </div>
  );
};

export default Settings;