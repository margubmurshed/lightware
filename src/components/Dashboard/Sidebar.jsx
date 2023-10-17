import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="text-[#242424] px-6">
            <Link to='/dashboard'><h1 className="uppercase text-[18px] px-4 font-semibold">My Account</h1></Link>
            <hr className="my-1" />

            {/* Dashboard Navigation */}
            <ul className="text-[15px] font-semibold">
                <Link to='/dashboard'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Dashboard</li>
                </Link>
                <Link to='/dashboard/orders'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Orders</li>
                </Link>
                <Link to='/dashboard/address'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Addresses</li>
                </Link>
                <Link to='/dashboard/account-details'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Account Details</li>
                </Link>
                <Link to='/dashboard/wishlist'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Wishlist</li>
                </Link>
                <Link to='/dashboard'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Logout</li>
                </Link>
            </ul>

        </div>
    );
};

export default Sidebar;