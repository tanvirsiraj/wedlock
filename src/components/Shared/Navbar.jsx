import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bg-primary-color py-2">
        <div className="flex lg:justify-end items-center max-w-6xl mx-auto gap-3 text-white px-2 lg:px-0">
          <span className="font-semibold">Follow us on: </span>
          <div className=" flex gap-3">
            <FaFacebookF className="text-lg" />
            <FaTwitter className="text-lg" />
            <FaPinterest className="text-lg" />
            <FaInstagram className="text-lg" />
          </div>
        </div>
      </div>

      <nav className="flex max-w-6xl mx-auto justify-between items-center pt-2 lg:pt-5 px-2 lg:px-0">
        <a href="#" className="font-semibold  text-2xl text-primary-color">
          WedLock
        </a>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? (
            <AiOutlineMenu className="text-2xl cursor-pointer text-black" />
          ) : (
            <AiOutlineClose className="text-2xl cursor-pointer text-black" />
          )}
        </div>

        <ul
          className={`absolute duration-1000 z-50  lg:static lg:flex gap-8 items-center bg-primary-color lg:bg-white py-4 ps-4 pe-20 rounded-lg text-black text-lg font-semibold ${
            open ? "-top-60" : "top-20"
          }`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <div className="lg:hidden mt-4">
            <button className="btn  bg-black outline-none border-none text-lg text-white capitalize">
              Login
            </button>
          </div>
        </ul>
        <div className="hidden lg:block">
          <button className="btn  bg-primary-color outline-none border-none text-lg text-white capitalize">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
