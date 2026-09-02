"use client";
import { useState } from "react";
import "./index.css";

const menuItems = [
  { id: 1, name: "Masala Tea", price: 40 },
  { id: 2, name: "Ginger Tea", price: 45 },
  { id: 3, name: "Green Tea", price: 50 },
  { id: 4, name: "Lemon Tea", price: 35 },
  { id: 5, name: "Herbal Tea", price: 60 },
];

function Menu() {
  const [orderedItem, setOrderedItem] = useState(null);

  return (
    <section className="menu" id="menu">
      <h1 className="menu-title">Our Menu</h1>

      <p className="menu-subtitle">
        Freshly Brewed Teas with Authentic Taste
      </p>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <h3 className="menu-left">{item.name}</h3>

            <p className="menu-left">₹{item.price}</p>

            <div>
              <button
                className="menu-btn"
                onClick={() => setOrderedItem(item.id)}
                disabled={orderedItem === item.id}
              >
                {orderedItem === item.id ? "Ordered" : "Order"}
              </button>

              {orderedItem === item.id && (
                <p className="success-msg">
                Order Placed Successfully!!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;