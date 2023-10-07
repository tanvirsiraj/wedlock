import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Login from "../components/Shared/Login";
import Register from "../components/Shared/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Register />,
      },
    ],
  },
]);

export default router;
