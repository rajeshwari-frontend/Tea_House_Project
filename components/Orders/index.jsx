import RecentOrders from "../Dashboard/RecentOrders"; 
import "./index.css";




const Orders = () => {
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
        />

        <select className="status-filter">
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
<RecentOrders/>
    </div>
  );
};

export default Orders;