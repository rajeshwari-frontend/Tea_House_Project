import { FiShoppingBag } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import "./index.css";

const cards = [
  {
    id: 1,
    icon: <FiShoppingBag />,
    title: "Total Orders",
    value: "128",
    growth: "+12%",
  },
  {
    id: 2,
    icon: <FaRupeeSign />,
    title: "Total Revenue",
    value: "₹45,680",
    growth: "+18%",
  },
  {
    id: 3,
    icon: <HiOutlineUsers />,
    title: "Total Customers",
    value: "256",
    growth: "+10%",
  },
];

const DashboardCards = () => {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>

          <div className="card-icon">
            {card.icon}
          </div>

          <div className="card-content">

            <p className="card-title">
              {card.title}
            </p>

            <h2 className="card-value">
              {card.value}
            </h2>

            <span className="card-growth">
              {card.growth} vs last month
            </span>

          </div>

        </div>
      ))}
    </div>
  );
};

export default DashboardCards;