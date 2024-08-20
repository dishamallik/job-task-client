import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Navbar = () => {
  const { logout, user } = useAuth();

  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/us">About Us</Link></li>
    </>
  );

  return (
    <div className="navbar bg-amber-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-3xl font-Display font-bold navbar-brand">
          <span className='text-red-600'>e</span>mart
        </a>
      </div>

      <div className="navbar-center hidden lg:flex"></div> {/* Keeping center empty to use space efficiently */}

      <div className="navbar-end flex items-center gap-3">
        <ul className="menu menu-horizontal px-1 text-lg font-bold hidden lg:flex">
          {navOptions}
        </ul>
        {user ? (
          <div className="flex items-center gap-3 hidden lg:flex">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
              <div className="w-10 rounded-full">
                <img alt="User" src={user?.photoURL || "https://i.ibb.co/df04xnj/user.jpg"} />
                <div className="absolute top-7 left-0 right-0 bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 hover:bg-rose-100 hover:rounded-lg hover:text-white">
                  <div className="text-black text-center py-2">{user?.displayName || "user not found"}</div>
                </div>
              </div>
            </div>
            <button onClick={logout} className="btn btn-outline bg-rose-500">Log Out</button>
          </div>
        ) : (
          <div className="flex gap-3 hidden lg:flex">
            <Link to="/log"><button className="btn btn-outline bg-rose-500">Log In</button></Link>
            <Link to="/reg"><button className="btn btn-outline bg-rose-500">Register</button></Link>
          </div>
        )}
      </div>

      <div className="dropdown lg:hidden ml-auto"> {/* Mobile dropdown */}
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-rose-100 rounded-box w-32 right-0">
          {navOptions}
          {user ? (
            <>
              <li className="flex items-center gap-3">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
                  <div className="w-10 rounded-full">
                    <img alt="User" src={user?.photoURL || "https://i.ibb.co/df04xnj/user.jpg"} />
                    <div className="absolute top-7 left-0 right-0 bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 hover:bg-rose-100 hover:rounded-lg hover:text-white">
                      <div className="text-black text-center py-2">{user?.displayName || "user not found"}</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button onClick={logout} className="btn btn-outline bg-rose-500 w-full">Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/log">
                  <button className="btn btn-outline bg-rose-500 w-full">Log In</button>
                </Link>
              </li>
              <li>
                <Link to="/reg">
                  <button className="btn btn-outline bg-rose-500 w-full">Register</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
