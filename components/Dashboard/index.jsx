import Navbar from "./Navbar";
import DashboardCards from "./DashboardCards";
import SalesChart from "./SalesChart";
import TopSelling from "./TopSelling";
import RecentOrders from "./RecentOrders";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
<DashboardCards />

<div className="dashboard-middle">
  <SalesChart />
  <TopSelling />
</div>

<RecentOrders />
    </div>
  );
};

export default Dashboard;