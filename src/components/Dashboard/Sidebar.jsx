import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="text-[#242424] px-6">
            <h1 className="uppercase text-[18px] px-4 font-semibold">My Account</h1>
            <hr className="my-1" />

            {/* Dashboard Navigation */}
            <ul className="text-[15px] font-semibold">
                <Link to='/dashboard'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Orders</li>
                </Link>

                <Link to='/dashboard'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Downloads</li>
                </Link>
                <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Addresses</li>
                <Link to='/dashboard'>
                    <li className="hover:bg-[#F1F1F1] hover:cursor-pointer py-2 px-4 rounded-md transition-all duration-500 w-full min-w-[200px]">Account Details</li>
                </Link>
                <Link to='/dashboard'>
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