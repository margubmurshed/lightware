import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterestP, FaGooglePlusG, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer border-t-2 border-red-500'>
            <div className='max-w-screen-xl mx-auto pt-24 pb-8 flex flex-wrap space-y-7  border-b border-gray-800'>
                <div className=' px-4 border-r  border-gray-800 md:w-2/5'>
                    <h2 className='text-3xl text-white'>Team Project.</h2>
                    <p className='text-secondary py-5'>We are a team of designers and developers who creates high quality premium React themes.</p>
                    <div className='text-white space-y-2'>
                        <p className='flex items-center gap-4'> <FaMapMarkerAlt className='text-markText' /> <span>Address:  No 40 Baria Sreet 133/2, NewYork, USA.</span></p>
                        <p className='flex items-center gap-4'> <FaPhoneAlt className='text-markText' /> <span>Phone:  +880 1900-000000</span></p>
                        <p className='flex items-center gap-4'> <FaEnvelope className='text-markText' />Email:  support@team-701.3</p>
                    </div>
                </div>
                <div className='px-4 py-2 border-r   border-gray-800 w-48'>
                    <h3 className='text-white text-2xl pb-5'>Main Menu</h3>
                    <ul className='text-secondary space-y-3'>
                        <li className='hoverStyle'>Home</li>
                        <li className='hoverStyle'>Shop</li>
                        <li className='hoverStyle'>Featured</li>
                        <li className='hoverStyle'>Layouts</li>
                        <li className='hoverStyle'>Pages</li>
                    </ul>
                </div>
                <div className='px-4 py-2 border-r   border-gray-800 w-48'>
                    <h3 className='text-white text-2xl pb-5'>Main Menu</h3>
                    <ul className='text-secondary space-y-3'>
                        <li className='hoverStyle'>Home</li>
                        <li className='hoverStyle'>Shop</li>
                        <li className='hoverStyle'>Featured</li>
                        <li className='hoverStyle'>Layouts</li>
                        <li className='hoverStyle'>Pages</li>
                    </ul>
                </div>
                <div className='px-4 py-2 border-r   border-gray-800 w-48'>
                    <h3 className='text-white text-2xl pb-5'>Main Menu</h3>
                    <ul className='text-secondary space-y-3'>
                        <li className='hoverStyle'>Home</li>
                        <li className='hoverStyle'>Shop</li>
                        <li className='hoverStyle'>Featured</li>
                        <li className='hoverStyle'>Layouts</li>
                        <li className='hoverStyle'>Pages</li>
                    </ul>
                </div>
                <div className='px-4 py-2 border-r   border-gray-800 w-48'>
                    <h3 className='text-white text-2xl pb-5'>Main Menu</h3>
                    <ul className='text-secondary space-y-3'>
                        <li className='hover:text-[#e51515] hover:translate-x-3 duration-700 transition-all'>Home</li>
                        <li className='hoverStyle'>Shop</li>
                        <li className='hoverStyle'>Featured</li>
                        <li className='hoverStyle'>Layouts</li>
                        <li className='hoverStyle'>Pages</li>
                    </ul>
                </div>


            </div>
            <div className='py-14 max-w-screen-xl mx-auto flex justify-center'>
                <div className='flex gap-x-20 '>
                    <p className='text-secondary'>Copyright © 2022 <span className=' text-markText'>Team 701.3 </span> All Rights Reserved.</p>
                    <div className='flex space-x-3'>
                        <FaFacebook className='text-secondary hover:text-red-500 duration-300' />
                        <FaTwitter className='text-secondary hover:text-red-500 duration-300' />
                        <FaInstagram className='text-secondary hover:text-red-500 duration-300' />
                        <FaPinterestP className='text-secondary hover:text-red-500 duration-300' />
                        <FaGooglePlusG className='text-secondary hover:text-red-500 duration-300' />
                    </div>
                </div>

            </div>


        </div >
    );
};

export default Footer;