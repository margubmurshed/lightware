import { Link, useLocation } from "react-router-dom";
import './DashboardBanner.css';
import { useEffect, useState } from "react";

const DashboardBanner = () => {
    const [title, setTitle] = useState('My Account');
    const location = useLocation();

    const navLinks = {
        'Orders': '/dashboard/orders',
        'Address': '/dashboard/address',
        'Wishlist': '/dashboard/wishlist',
        'My Account': '/dashboard'
    }

    useEffect(()=>{
        if(location.pathname === '/dashboard/orders'){
            setTitle('Orders')
        }
        else if(location.pathname === '/dashboard/address'){
            setTitle('Address')
        }
        else if(location.pathname === '/dashboard/wishlist'){
            setTitle('Wishlist')
        }
        else {
            setTitle('My Account')
        }
    },[location]);



    return (
        <div className="py-12 px-4 dashboard-banner flex flex-col justify-center items-center">
            <h1 className="text-white text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] font-semibold text-center">
                {
                    title
                }
            </h1>
            <p className="mt-2 text-center uppercase text-[12px] text-white">
                <Link className="hover:underline hover:text-gray-200 transition-all duration-300" to='/'>Home</Link>
                <span className="mx-2">/</span>
                <Link className="hover:underline" to={navLinks[title]}>{title}</Link>
            </p>
        </div>
    );
};

export default DashboardBanner;