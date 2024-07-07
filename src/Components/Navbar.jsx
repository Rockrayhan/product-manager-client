import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);



  return (
    <div className="navbar bg-orange-300 mb-10 p-4 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            {/* <li><Link to='/About'>About</Link></li> */}
            {/* <li><Link to='/Contact'>Contact</Link></li> */}
            <li><Link to='/products'>All Products</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Product-Manager</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><Link to='/'>Home</Link></li>
          {/* <li><Link to='/About'>About</Link></li> */}
          {/* <li><Link to='/Contact'>Contact</Link></li> */}
          <li><Link to='/products'>All Products</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold">{user.displayName}</span>
            <button onClick={logOut} className="btn btn-outline btn-white">Log Out</button>
          </div>
        ) : (
          <Link to='/login' className="btn btn-white">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
