import { GiTeapot } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { LuCoffee } from "react-icons/lu";
import { MdGridView } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import "./index.css";

const menuItems = [
  {
    id: 1,
    icon: <MdDashboard />,
    title: "Dashboard",
    path: "/admin",

  },
  {
    id: 2,
    icon: <FiShoppingBag />,
    title: "Orders",
    path: "/admin/orders",  
  },
  {
    id: 3,
    icon: <LuCoffee />,
    title: "Menu Items",
    path: "/admin/menu-items",
  },
  {
    id: 4,
    icon: <MdGridView />,
    title: "Categories",
    path: "/admin/categories",
  },
  {
    id: 5,
    icon: <MdOutlineMail />,
    title: "Messages",
    path: "/admin/messages",
  },
  {
    id: 6,
    icon: <HiOutlineUsers />,
    title: "Subscribers",
    path: "/admin/subscribers",
  },
  {
    id: 7,
    icon: <IoSettingsOutline />,
    title: "Settings",
    path: "/admin/settings",
  },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
  <FiX
    className="close-icon"
    onClick={() => setIsSidebarOpen(false)}
  />
</div>
      <div>
        <div className="logo-section">
          <div className="logo-icon">
            <GiTeapot className="tea-icon" />
          </div>

          <div className="logo-text">
            <h1>Tea House</h1>
            <p>Admin Panel</p>
          </div>
        </div>

        <div className="menu-section">
  {menuItems.map((item) => (
    <Link
      href={item.path}
      className="menu-item"
      key={item.id}
    >
      <span className="menu-icon">
        {item.icon}
      </span>

      <span className="menu-title">
        {item.title}
      </span>
    </Link>
  ))}
</div>
      </div>

      <div className="bottom-section">
        <div className="logout-section">
          <span className="logout-icon">
            <FiLogOut />
          </span>

          <span className="logout-title">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;