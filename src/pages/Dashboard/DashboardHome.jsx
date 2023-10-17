import { IoDocumentTextOutline, IoLocationOutline } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { SlLogout } from 'react-icons/sl'
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className='md:border-l px-8'>
            <h1 className="text-[15px] text-[#777777] mb-3">Hello <span className="font-semibold">Mutaher Ahmed Shakil</span></h1>
            <p className="text-[15px] text-[#777777]">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>

            {/* Dashboard Home Main Content */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
                <Link to='/dashboard/orders'>
                    <div className='min-h-[180px] group flex flex-col gap-4 justify-center items-center hover:bg-[#F1F1F1] transition-all duration-300 cursor-pointer shadow-md rounded-md py-5'>
                        <IoDocumentTextOutline className='text-[#777777] text-[48px] group-hover:text-[#555555] transition-all duration-300' />
                        <span className='uppercase text-[14px] font-semibold text-[#555555]'>Orders</span>
                    </div>
                </Link>
                <Link to='/dashboard/address'>
                    <div className='min-h-[180px] group flex flex-col gap-4 justify-center items-center hover:bg-[#F1F1F1] transition-all duration-300 cursor-pointer shadow-md rounded-md py-5'>
                        <IoLocationOutline className='text-[#777777] text-[48px] group-hover:text-[#555555] transition-all duration-300' />
                        <span className='uppercase text-[14px] font-semibold text-[#555555]'>Addresses</span>
                    </div>
                </Link>
                <Link to='/dashboard/account-details'>
                    <div className='min-h-[180px] group flex flex-col gap-4 justify-center items-center hover:bg-[#F1F1F1] transition-all duration-300 cursor-pointer shadow-md rounded-md py-5'>
                        <VscAccount className='text-[#777777] text-[48px] group-hover:text-[#555555] transition-all duration-300' />
                        <span className='uppercase text-[14px] font-semibold text-[#555555]'>Account Details</span>
                    </div>
                </Link>
                <Link to='/dashboard/wishlist'>
                    <div className='min-h-[180px] group flex flex-col gap-4 justify-center items-center hover:bg-[#F1F1F1] transition-all duration-300 cursor-pointer shadow-md rounded-md py-5'>
                        <AiOutlineHeart className='text-[#777777] text-[48px] group-hover:text-[#555555] transition-all duration-300' />
                        <span className='uppercase text-[14px] font-semibold text-[#555555]'>Wishlist</span>
                    </div>
                </Link>

                {/* Logout */}
                <div className='min-h-[180px] group flex flex-col gap-4 justify-center items-center hover:bg-[#F1F1F1] transition-all duration-300 cursor-pointer shadow-md rounded-md py-5'>
                    <SlLogout className='text-[#777777] text-[48px] group-hover:text-[#555555] transition-all duration-300' />
                    <span className='uppercase text-[14px] font-semibold text-[#555555]'>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;