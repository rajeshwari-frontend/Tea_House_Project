import Navbar from "@/components/CustomerComponent/Navbar";

export default function CustomerLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        {children}
      </main>
    </>
  );
}