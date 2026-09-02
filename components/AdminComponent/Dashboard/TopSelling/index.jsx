import "./index.css";

const topSellingItems = [
  {
    id: 1,
    name: "Masala Chai",
    cups: 120,
  },
  {
    id: 2,
    name: "Ginger Tea",
    cups: 98,
  },
  {
    id: 3,
    name: "Lemon Tea",
    cups: 85,
  },
  {
    id: 4,
    name: "Green Tea",
    cups: 70,
  },
  {
    id: 5,
    name: "Cardamom Tea",
    cups: 60,
  },
];

const TopSelling = () => {
  return (
    <div className="top-selling">
      <h3 className="top-selling-title">
        Top Selling Items
      </h3>

      {topSellingItems.map((item) => (
        <div
          className="top-selling-item"
          key={item.id}
        >
          <span className="tea-name">
            {item.name}
          </span>

          <span className="tea-cups">
            {item.cups} cups
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopSelling;