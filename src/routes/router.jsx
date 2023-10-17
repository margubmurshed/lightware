import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import UserOrders from "../pages/Dashboard/UserOrders";
import AccountDetails from "../pages/Dashboard/AccountDetails";
import UserAddress from "../pages/Dashboard/UserAddress";
import Wishlist from "../pages/Dashboard/Wishlist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome />
            },
            {
                path: '/dashboard/orders',
                element: <UserOrders />
            },
            {
                path: '/dashboard/account-details',
                element: <AccountDetails />
            },
            {
                path: '/dashboard/address',
                element: <UserAddress />
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist />
            }
        ]
    }
])