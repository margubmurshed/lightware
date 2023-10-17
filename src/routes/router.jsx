import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardHome from "../components/Dashboard/DashboardHome";

export const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            }
        ]
    }
])