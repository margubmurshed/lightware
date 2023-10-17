import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardBanner from "../components/Dashboard/DashboardBanner";

const Dashboard = () => {
    return (
        <div>
            <DashboardBanner />
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 my-12 px-10">
                <Sidebar />
                <div className="grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;