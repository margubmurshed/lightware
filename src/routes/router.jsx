import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])