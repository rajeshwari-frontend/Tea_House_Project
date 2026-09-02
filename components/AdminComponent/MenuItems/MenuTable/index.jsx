import Link from "next/link";
import "./index.css";

const MenuTable = ({menuItems}) => {
  return (
    <div className="menu-table-container">
  <table className="menu-table">
    <thead>
      <tr>
        <th>Tea Name</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {menuItems.map(item => (
        <tr key={item.id}>
          <td>
  <Link href={`/dashboard/menu-items/${item.id}`}>
    {item.name}
  </Link>
</td>

          <td>{item.price}</td>

          <td>
            <span
              className={`status ${item.status
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {item.status}
            </span>
          </td>

          <td>
            <button className="edit-btn">
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default MenuTable;