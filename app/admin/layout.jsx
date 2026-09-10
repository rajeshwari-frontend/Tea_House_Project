"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/AdminComponent/Sidebar";
import Navbar from "@/components/AdminComponent/Dashboard/Navbar";
import LoginForm from "@/components/login";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  
if (!isLoggedIn) {
  return <LoginForm />;
}
  return (
    <main className="dashboard-layout">

     
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="dashboard-content">
        {pathname === "/admin" && (
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        
        {children}

      </div>

    </main>
  );
}