import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex gap-10">
      <aside className="w-1/5 bg-gray-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
        <nav className="dashboard-nav">

        <Link to='' className="mb-3">
            <span className="hover:text-gray-300">All Products</span>
          </Link>


          <Link to="/dashboard/my-blogs" className="mb-3">
            <span className="hover:text-gray-300">My Products</span>
          </Link>



          <Link to="/dashboard/add-blog" className="mb-3">
            <span className="hover:text-gray-300">Add a Product</span>
          </Link>


    
          <Link to="/dashboard/my-purchased" className="mb-3">
            <span className="hover:text-gray-300">Purchased Products</span>
          </Link>



          <Link to='/dashboard/profile' className="mb-3">
            <span className="hover:text-gray-300"> Profile</span>
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
