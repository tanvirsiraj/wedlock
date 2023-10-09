import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/footer";
import { useContext } from "react";
import { Context } from "../context/AuthContext";

const Root = () => {
  return (
    <div className="min-h-screen ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
