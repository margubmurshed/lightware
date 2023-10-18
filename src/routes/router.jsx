/** @format */

import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Products from "../Layout/Products";
import OurProducts from "../ProductsPage/OurProducts/OurProducts";
import ProductDetails from "../ProductsPage/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Products></Products>,
        children: [
            {
                path: '/',
                element: <OurProducts></OurProducts>  
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails> 
            }
        ]
    }
])
=======
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
>>>>>>> e0d67be4d496d911ac1a926a847734a390c0e71b
