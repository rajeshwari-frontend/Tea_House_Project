"use client";
import menuItems from "../data/menuItems";
import { useState } from "react";
import MenuTable from "./MenuTable";

import "./index.css"


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