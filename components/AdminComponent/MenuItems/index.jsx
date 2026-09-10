"use client";
import menuItems from "../data/menuItems";
import { useState } from "react";
import MenuTable from "./MenuTable";
import toast from "react-hot-toast";

import "./index.css"


const MenuItems=()=>{
    
    
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [menuItemsList, setMenuItemsList] = useState(menuItems);
const [editItemId, setEditItemId] = useState(null);
const [deleteItemId, setDeleteItemId] = useState(null);
const [formData, setFormData] = useState({
  name: "",
  price: "",
  status: "Available",
});

    const filteredMenuItems = menuItemsList.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const handleSave = () => {
  if (formData.name.trim() === "") {
  toast.error("Please enter tea name!");
  return;
  
}
if (formData.price.trim() === "") {
    toast.error("Please enter price!");
    return;
  }

  if (editItemId !== null) {
  
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
    toast.success("Menu item updated successfully!");
  } else {
  
    const newItem = {
      id: menuItemsList.length + 1,
      name: formData.name,
      price: `₹${formData.price}`,
      status: formData.status,
    };

    setMenuItemsList([...menuItemsList, newItem]);
    toast.success("Menu item added successfully!");
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
    price: item.price.replace("₹", ""),
    status: item.status,
  });

  setEditItemId(item.id);
  setShowForm(true);
};
const handleDelete = (id) => {
  setDeleteItemId(id);
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
  <div className="dialog-overlay">
    <div className="dialog-box">

      <h2>
        {editItemId !== null ? "Edit Menu Item" : "Add Menu Item"}
      </h2>

      <div className="form-fields">

  <div className="form-group">
    <label>Tea Name</label>
    <input
      type="text"
      placeholder="Enter tea name"
      value={formData.name}
      onChange={(e) =>
        setFormData({
          ...formData,
          name: e.target.value,
        })
      }
    />
  </div>

  <div className="form-group">
    <label>Price</label>
    <input
      type="number"
      placeholder="Enter price"
      value={formData.price}
      onChange={(e) =>
        setFormData({
          ...formData,
          price: e.target.value,
        })
      }
    />
  </div>

  <div className="form-group">
    <label>Status</label>
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

</div>

      <div className="dialog-actions">

        <button
          className="cancel-btn"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>

        <button
          className="save-btn"
          onClick={handleSave}
        >
          {editItemId !== null ? "Update" : "Save"}
        </button>

      </div>

    </div>
  </div>
)}

<MenuTable
  menuItems={filteredMenuItems}
  onEdit={handleEdit}
   onDelete={handleDelete}
/>
{deleteItemId !== null && (
  <div className="dialog-overlay">
    <div className="dialog-box">
      <h2>Delete Menu Item</h2>

      <p>Are you sure you want to delete this item?</p>

      <div className="dialog-actions">
        <button
          className="cancel-btn"
          onClick={() => setDeleteItemId(null)}
        >
          Cancel
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            const updatedMenuItems = menuItemsList.filter(
              (item) => item.id !== deleteItemId
            );

            setMenuItemsList(updatedMenuItems);
            setDeleteItemId(null);

            toast.success("Menu item deleted successfully!");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

        </div>
    )
}



export default MenuItems;