
import DashboardCards from "./DashboardCards";
import SalesChart from "./SalesChart";
import TopSelling from "./TopSelling";
import RecentOrders from "./RecentOrders";
import "./index.css";

const Dashboard = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="dashboard">

      

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