import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Payment from "../pages/Dashboard/Payment";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AccountDetails from "../pages/Dashboard/AccountDetails";
import UserAddress from "../pages/Dashboard/UserAddress";
import Wishlist from "../pages/Dashboard/Wishlist";
import UserOrders from "../pages/Dashboard/UserOrders";





export const router = createBrowserRouter([
    {path: "/", element: <MainLayout />, children: [
        {
            path: 'dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    index: true,
                    element: <DashboardHome />
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
                },
                {
                    path: '/dashboard/orders',
                    element: <UserOrders />
                },
                {
                    path: '/dashboard/payment',
                    element: <Payment />
                }
            ]
        },
    ]}
])