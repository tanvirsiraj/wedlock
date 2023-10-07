import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
