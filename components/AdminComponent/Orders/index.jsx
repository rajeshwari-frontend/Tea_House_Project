"use client";
import { useState } from "react";
import OrdersTable from "./OrdersTable";
import "./index.css";

const orders = [
  {
    id: "TH1256",
    customer: "Rajii",
    items: "Masala Chai, Ginger Tea",
    amount: "₹320",
    status: "Completed",
    date: "24 Jul 2026",
  },
  {
    id: "TH1255",
    customer: "Rathan",
    items: "Lemon Tea, Green Tea",
    amount: "₹250",
    status: "Pending",
    date: "21 Jul 2026",
  },
  {
    id: "TH1254",
    customer: "Kowsi",
    items: "Masala Chai",
    amount: "₹120",
    status: "Preparing",
    date: "23 Jul 2026",
  },
  {
    id: "TH1253",
    customer: "aju",
    items: "Masala Chai, Ginger Tea",
    amount: "₹320",
    status: "Completed",
    date: "30 Jul 2026",
  },
  {
    id: "TH1252",
    customer: "Babu",
    items: "Masala Chai, Ginger Tea",
    amount: "₹320",
    status: "Completed",
    date: "30 Jul 2026",
  },
  {
    id: "TH1251",
    customer: "Vgm",
    items: "Masala Chai, Ginger Tea",
    amount: "₹320",
    status: "Cancelled",
    date: "24 Jul 2026",
  },
];


const Orders = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    
    const filteredOrders = orders.filter((order) => {
  const matchesSearch =
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.items.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All Status" ||
    order.status === statusFilter;

  return matchesSearch && matchesStatus;
});
  return (
    <div className="orders-page">

      <div className="orders-header">

        <h1>Orders</h1>

        
      </div>

      <div className="orders-toolbar">

        <input
  type="text"
  placeholder="Search Orders..."
  className="search-input"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
<select
  className="status-filter"
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Preparing</option>
          <option>Cancelled</option>
        </select>

        <select className="date-filter">
          <option>All Dates</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>

      </div>
<OrdersTable orders={filteredOrders} />
    </div>
  );
};

export default Orders;