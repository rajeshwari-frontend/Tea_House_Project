"use client";

import { useState } from "react";
import "./index.css";

const subscribers = [
  {
    id: 1,
    email: "rajii@gmail.com",
    date: "30 Jul 2026",
    status: "Active",
  },
  {
    id: 2,
    email: "aju@gmail.com",
    date: "29 Jul 2026",
    status: "Active",
  },
  {
    id: 3,
    email: "kowsi@gmail.com",
    date: "28 Jul 2026",
    status: "Active",
  },
  {
    id: 4,
    email: "rathan@gmail.com",
    date: "27 Jul 2026",
    status: "Inactive",
  },
];

const Subscribers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubscribers = subscribers.filter((item) =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="subscribers-page">
      <div className="subscribers-header">
        <h1>Subscribers</h1>
      </div>

      <div className="subscribers-toolbar">
        <input
          type="text"
          placeholder="Search Subscribers..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="subscribers-container">
        {filteredSubscribers.map((item) => (
          <div className="subscriber-card" key={item.id}>
            <h3>{item.email}</h3>

            <div className="subscriber-info">
              <p>
                <strong>Subscribed On:</strong> {item.date}
              </p>

              
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscribers;