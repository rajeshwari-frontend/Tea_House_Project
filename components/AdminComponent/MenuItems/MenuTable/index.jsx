
import "./index.css";

const MenuTable = ({ menuItems, onEdit, onDelete }) => {
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

    {item.name}
 
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
            <button className="edit-btn" onClick={() => onEdit(item)}>
              Edit
            </button>
            <button
    className="delete-btn"
    onClick={() => onDelete(item.id)}
  >
    Delete
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