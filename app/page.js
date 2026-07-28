import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <main className="dashboard-layout">
      <Sidebar />
      <Dashboard />
    </main>
  );
} 