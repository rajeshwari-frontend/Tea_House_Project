 import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
}

/*  "use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="dashboard-layout">

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Dashboard
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

    </main>
  );
} */