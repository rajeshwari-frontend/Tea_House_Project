"use client";
import menuItems from "../data/menuItems";
import { useState } from "react";
import MenuTable from "./MenuTable";

import "./index.css"


const MenuItems=()=>{
    
    
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [menuItemsList, setMenuItemsList] = useState(menuItems);
const [editItemId, setEditItemId] = useState(null);

const [formData, setFormData] = useState({
  name: "",
  price: "",
  status: "Available",
});

    const filteredMenuItems = menuItemsList.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const handleSave = () => {
  if (editItemId !== null) {
    // Update existing item
    const updatedMenuItems = menuItemsList.map((item) =>
      item.id === editItemId
        ? {
            ...item,
            name: formData.name,
            price: `₹${formData.price}`,
            status: formData.status,
          }
        : item
    );

    setMenuItemsList(updatedMenuItems);
  } else {
  
    const newItem = {
      id: menuItemsList.length + 1,
      name: formData.name,
      price: `₹${formData.price}`,
      status: formData.status,
    };

    setMenuItemsList([...menuItemsList, newItem]);
  }

  setFormData({
    name: "",
    price: "",
    status: "Available",
  });

  setEditItemId(null);
  setShowForm(false);
};
const handleEdit = (item) => {
 setFormData({
    name: item.name,
    price: item.price,
    status: item.status,
  });

  setEditItemId(item.id);
  setShowForm(true);
};
const handleDelete = (id) => {
  const isConfirmed = window.confirm(
    "Are you sure you want to delete this item?"
  );

  if (isConfirmed) {
    const updatedMenuItems = menuItemsList.filter(
      (item) => item.id !== id
    );

    setMenuItemsList(updatedMenuItems);
  }
};
    return (
        <div className="menu-page">
            <div className="menu-header">
                <h1>Menu Items</h1>
                <button
  className="add-menu-btn"
  onClick={() => {
    setEditItemId(null);

    setFormData({
      name: "",
      price: "",
      status: "Available",
    });

    setShowForm(true);
  }}
>
  + Add Menu Item
</button>
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

{showForm && (
  <div className="add-menu-form">
    <h2>{editItemId !== null ? "Edit Menu Item" : "Add Menu Item"}</h2>

    <div className="form-fields">
      <input
        type="text"
        placeholder="Tea Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          setFormData({
            ...formData,
            price: e.target.value,
          })
        }
      />

      <select
        value={formData.status}
        onChange={(e) =>
          setFormData({
            ...formData,
            status: e.target.value,
          })
        }
      >
        <option value="Available">Available</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
    </div>

    <div className="form-actions">
      <button className="save-btn" onClick={handleSave}>
        Save
      </button>

      <button
        className="cancel-btn"
        onClick={() => setShowForm(false)}
      >
        Cancel
      </button>
    </div>
  </div>
)}

<MenuTable
  menuItems={filteredMenuItems}
  onEdit={handleEdit}
   onDelete={handleDelete}
/>

        </div>
    )
}



export default MenuItems;