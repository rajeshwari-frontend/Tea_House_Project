import menuItems from "../../../../components/AdminComponent/data/menuItems";

export async function GET(request, { params }) {
  const { id } = await params;

  const menuItem = menuItems.find(
    (item) => item.id === Number(id)
  );

  return Response.json(menuItem);
}