import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRouter from "./PrivateRouter";
import Apointment from "../pages/Apointment";
import LoginOther from "../pages/LoginOther";
import ServiceDetails from "../pages/ServiceDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Servics.json"),
      },
      {
        path: "/login",
        element: <LoginOther></LoginOther>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/Apointment",
        element: (
          <PrivateRouter>
            <Apointment></Apointment>
          </PrivateRouter>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
        loader: () => fetch("./Servics.json"),
      },
    ],
  },
]);
export default router;
