import { Link } from "react-router-dom";
import './DashboardBanner.css';

const DashboardBanner = () => {
    return (
        <div className="py-12 px-4 dashboard-banner flex flex-col justify-center items-center">
            <h1 className="text-white text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] font-semibold text-center">My Account</h1>
            <p className="mt-2 text-center uppercase text-[12px] text-white">
                <Link className="hover:underline hover:text-gray-200 transition-all duration-300" to='/'>Home</Link>
                <span className="mx-2">/</span>
                <Link className="hover:underline" to='/dashboard'>My Account</Link>
            </p>
        </div>
    );
};

export default DashboardBanner;