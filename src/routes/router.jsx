import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import UserOrders from "../pages/Dashboard/UserOrders";
import AccountDetails from "../pages/Dashboard/AccountDetails";
import UserAddress from "../pages/Dashboard/UserAddress";
import Wishlist from "../pages/Dashboard/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "/dashboard/account-details",
            element: <AccountDetails />,
          },
          {
            path: "/dashboard/address",
            element: <UserAddress />,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/dashboard/orders",
            element: <UserOrders />,
          },
        ],
      },
    ],
  },
]);
