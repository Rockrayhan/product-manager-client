import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-10 relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 bg-gray-800 text-white fixed top-0 left-0 m-4 z-50"
      >
        {isOpen ? "Close" : "Open"} Sidebar
      </button>

      {/* Backdrop for sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white p-5 transform lg:transform-none transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative h-full lg:h-auto w-64 lg:w-1/5 z-50`}
      >
        <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
        <nav className="dashboard-nav flex flex-col space-y-3">
          <Link to="" className="hover:text-gray-300">
            <span>All Products</span>
          </Link>
          <Link to="/dashboard/my-blogs" className="hover:text-gray-300">
            <span>My Products</span>
          </Link>
          <Link to="/dashboard/add-blog" className="hover:text-gray-300">
            <span>Add a Product</span>
          </Link>
          <Link to="/dashboard/my-purchased" className="hover:text-gray-300">
            <span>Purchased Products</span>
          </Link>
          <Link to="/dashboard/profile" className="hover:text-gray-300">
            <span>Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <div className="bg-base p-4 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
