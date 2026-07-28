import "./index.css";

const recentOrders = [
  {
    id: "#TH1256",
    customer: "Rajii",
    items: "Masala Chai, Ginger Tea",
    amount: "₹320",
    status: "Completed",
    date: "24 Jul 2026",
  },
  {
    id: "#TH1255",
    customer: "Ajith",
    items: "Lemon Tea, Green Tea",
    amount: "₹250",
    status: "Pending",
    date: "24 Jul 2026",
  },
  {
    id: "#TH1254",
    customer: "Kowsi",
    items: "Masala Chai",
    amount: "₹120",
    status: "Completed",
    date: "23 Jul 2026",
  },
  {
    id: "#TH1253",
    customer: "Rathan",
    items: "Cardamom Tea, Ginger Tea",
    amount: "₹210",
    status: "Cancelled",
    date: "23 Jul 2026",
  },
  {
    id: "#TH1252",
    customer: "VGM",
    items: "Green Tea",
    amount: "₹110",
    status: "Completed",
    date: "23 Jul 2026",
  },
];

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <div className="orders-header">
        <h2>Recent Orders</h2>
        
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;