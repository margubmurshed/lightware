import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardHome from "../components/Dashboard/DashboardHome";
import AccountDetails from "../components/Dashboard/AccountDetails";
import UserAddress from "../components/Dashboard/UserAddress";
import Wishlist from "../components/Dashboard/Wishlist";
import UserOrders from "../components/Dashboard/UserOrders";
import Footer from "../shared/Footer/Footer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home Page</h1>
    },
    {
        path: '/footer',
        element: <Footer />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
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
            }
        ]
    }
])