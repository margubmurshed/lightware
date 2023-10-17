import { Outlet } from "react-router-dom";
import DashboardBanner from "./DashboardBanner";
import Sidebar from "./Sidebar";

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