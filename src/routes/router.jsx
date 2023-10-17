import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Payment from "../pages/Dashboard/Payment";


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
                    path: '/dashboard/orders',
                    element: <Payment />
                }
            ]
        },
    ]}
])