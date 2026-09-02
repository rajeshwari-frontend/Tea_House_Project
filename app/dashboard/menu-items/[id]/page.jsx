export default async function MenuItemDetails({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Menu Item Details</h1>
      <p>Menu Item ID: {id}</p>
    </div>
  );
}