export default async function MenuItemDetails({ params }) {
  const { id } = await params;

  const response = await fetch(
    `http://localhost:3001/api/menu-items/${id}`
  );

  const menuItem = await response.json();

  return (
    <div>
      <h1>Menu Item Details</h1>

      <h2>{menuItem.name}</h2>
      <p>Price: {menuItem.price}</p>
      <p>Status: {menuItem.status}</p>
    </div>
  );
}