/** @format */

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import UserOrders from "../pages/Dashboard/UserOrders";
import AccountDetails from "../pages/Dashboard/AccountDetails";
import UserAddress from "../pages/Dashboard/UserAddress";
import Wishlist from "../pages/Dashboard/Wishlist";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Payment from "../pages/Dashboard/Payment";
import ProductDetails from "../ProductsPage/ProductDetails/ProductDetails";
import ProductsReview from "../ProductsPage/ProductsReview/ProductsReview";

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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/productsdetails/:id",
        element: <ProductDetails></ProductDetails>
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
          {
            path: "/dashboard/payment",
            element: <Payment />,
          },
        ],
      },
    ],
  },
]);