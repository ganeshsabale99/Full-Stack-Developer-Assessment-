import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      <div
        className={`md:hidden fixed inset-0 z-40 flex ${
          sidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-600 ${
            sidebarOpen
              ? "opacity-75 transition-opacity ease-linear duration-300"
              : "opacity-0 transition-opacity ease-linear duration-300"
          }`}
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white transform ${
            sidebarOpen
              ? "translate-x-0 ease-out duration-300"
              : "-translate-x-full ease-in duration-300"
          }`}
        >
          <Sidebar mobile={true} onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64 flex flex-col">
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-50">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="fade-in">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
