import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../components/Dashboard/DashboardHome";
import AccountDetails from "../components/Dashboard/AccountDetails";
import UserAddress from "../components/Dashboard/UserAddress";
import Wishlist from "../components/Dashboard/Wishlist";
import UserOrders from "../components/Dashboard/UserOrders";
import MainLayout from "../layouts/MainLayout";
import Payment from "../components/Dashboard/Payment/Payment";

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