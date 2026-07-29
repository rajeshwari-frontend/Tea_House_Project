import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";


import "./index.css";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="navbar">


      <div className="navbar-right">
<div
      className="hamburger"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <FiMenu />
    </div>
        <div className="search-box">
          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        <div className="profile-section">
          <FaRegUserCircle className="profile-icon" />

          <span className="profile-name">
            Rajeshwari
          </span>
        </div>

      </div>

    </div>
  );
};

export default Navbar;