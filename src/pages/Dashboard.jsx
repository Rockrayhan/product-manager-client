import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex gap-10">
      <aside className="w-1/5 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
        <nav className="dashboard-nav">

        <Link to='' className="mb-3">
            <span className="hover:text-gray-300">My Profile</span>
          </Link>


          <Link to="/dashboard/my-blogs" className="mb-3">
            <span className="hover:text-gray-300">My Blogs</span>
          </Link>



          <Link to="/dashboard/add-blog" className="mb-3">
            <span className="hover:text-gray-300">Add a Blog</span>
          </Link>


    
          <Link to="#" className="mb-3">
            <span className="hover:text-gray-300">Settings</span>
          </Link>

          


        </nav>
      </aside>
      <main className="w-4/5">
        <div className="bg-base p-4 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
