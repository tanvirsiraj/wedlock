import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useContext } from "react";

import { Context } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(Context);
  // console.log(user.photoURL);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Logout Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinks = (
    <>
      <li className="py-2   rounded-lg lg:text-black text-lg font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="py-2   rounded-lg lg:text-black text-lg font-semibold  ">
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li className="py-2   rounded-lg lg:text-black text-lg font-semibold  ">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="relative bg-primary-color py-2">
        <div className="flex justify-center lg:justify-end items-center max-w-6xl mx-auto gap-2 lg:gap-3 text-white px-2 lg:px-0">
          <span className="font-semibold">Follow us on: </span>
          <div className=" flex gap-2 lg:gap-3">
            <FaFacebookF className=" lg:text-lg" />
            <FaTwitter className=" lg:text-lg" />
            <FaPinterest className=" lg:text-lg" />
            <FaInstagram className=" lg:text-lg" />
          </div>
        </div>
      </div>

      <div className="navbar bg-transparent max-w-6xl mx-auto pt-2 lg:pt-5 px-2 lg:px-0  relative z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              {user ? (
                <div className="flex-col lg:flex-row items-center px-2">
                  <div className="flex items-center">
                    <span>{user.displayName}</span>
                    <div className="avatar">
                      <div className="w-12 rounded-full mx-2">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  </div>
                  <Link
                    onClick={handleLogOut}
                    className="btn w-full btn-md mt-4  bg-primary-color outline-none border-none text-lg text-white capitalize"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn  bg-primary-color outline-none border-none text-lg text-white capitalize"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>

          <a
            href="#"
            className="font-semibold font-logo text-2xl lg:text-3xl text-primary-color"
          >
            WedLock
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="hidden lg:flex navbar-end">
          {user ? (
            <div className="flex items-center">
              <span className="text-black">{user.displayName}</span>
              <div className="avatar">
                <div className="w-12 rounded-full mx-2">
                  <img src={user.photoURL} />
                </div>
              </div>
              <Link
                onClick={handleLogOut}
                className="btn  bg-primary-color outline-none border-none text-lg text-white capitalize"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn  bg-primary-color outline-none border-none text-lg text-white capitalize"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
