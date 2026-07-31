"use client";

import { useState } from "react";
import MenuTable from "./MenuTable";

import "./index.css"
const menuItems = [
  {
    id: 1,
    name: "Masala Tea",
    price: "₹40",
    status: "Available",
  },
  {
    id: 2,
    name: "Ginger Tea",
    price: "₹45",
    status: "Available",
  },
  {
    id: 3,
    name: "Green Tea",
    price: "₹50",
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Lemon Tea",
    price: "₹35",
    status: "Available",
  },
];

const MenuItems=()=>{
    
    
    const [searchTerm, setSearchTerm] = useState("");
    const filteredMenuItems = menuItems.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
    return (
        <div className="menu-page">
            <div className="menu-header">
                <h1>Menu Items</h1>
            </div>
            <div className="menu-toolbar">

    <input
  type="text"
  placeholder="Search Tea..."
  className="search-input"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
        <MenuTable menuItems={filteredMenuItems} />

        </div>
    )
}



export default MenuItems;