import { GiTeapot } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { LuCoffee } from "react-icons/lu";
import { MdGridView } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import "./index.css";

const menuItems = [
  {
    id: 1,
    icon: <MdDashboard />,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: <FiShoppingBag />,
    title: "Orders",
  },
  {
    id: 3,
    icon: <LuCoffee />,
    title: "Menu Items",
  },
  {
    id: 4,
    icon: <MdGridView />,
    title: "Categories",
  },
  {
    id: 5,
    icon: <MdOutlineMail />,
    title: "Messages",
  },
  {
    id: 6,
    icon: <HiOutlineUsers />,
    title: "Subscribers",
  },
  {
    id: 7,
    icon: <IoSettingsOutline />,
    title: "Settings",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
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
            <div className="menu-item" key={item.id}>
              <span className="menu-icon">
                {item.icon}
              </span>

              <span className="menu-title">
                {item.title}
              </span>
            </div>
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