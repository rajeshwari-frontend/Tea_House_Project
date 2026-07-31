"use client";

import { useState } from "react";
import "./index.css";

const messages = [
  {
    id: 1,
    name: "Rajii",
    email: "rajii@gmail.com",
    message: "Loved your Masala Tea. Will definitely visit again!",
    date: "30 Jul 2026",
  },
  {
    id: 2,
    name: "Aju",
    email: "aju@gmail.com",
    message: "Great ambience and service.",
    date: "29 Jul 2026",
  },
  {
    id: 3,
    name: "Kowsi",
    email: "kowsi@gmail.com",
    message: "Can you add more herbal tea varieties?",
    date: "28 Jul 2026",
  },
  {
    id: 4,
    name: "Rathan",
    email: "rathan@gmail.com",
    message: "Thank you for the quick service.",
    date: "27 Jul 2026",
  },
];

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = messages.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="messages-page">
      <div className="messages-header">
        <h1>Messages</h1>
      </div>

      <div className="messages-toolbar">
        <input
          type="text"
          placeholder="Search Messages..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="messages-container">
        {filteredMessages.map((item) => (
          <div className="message-card" key={item.id}>
            <h3>{item.name}</h3>

            <p className="email">{item.email}</p>

            <p className="message">{item.message}</p>

            <div className="card-footer">
              <span>{item.date}</span>

              <button className="view-btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;