import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardHome from "../components/Dashboard/DashboardHome";
import AccountDetails from "../components/Dashboard/AccountDetails";
import UserAddress from "../components/Dashboard/UserAddress";

export const router = createBrowserRouter([
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
            }
        ]
    }
])