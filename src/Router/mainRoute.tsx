import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Components/Block/Layout/UserLayout";
import HomeScreen from "../Pages/User/HomeScreen";
import AdminLayout from "../Components/Block/Layout/AdminLayout";
import Dashboard from "../Pages/Admin/Dashboard";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/dash",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
