import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    return (
        <div className='md:border-l px-8 min-h-[250px]'>
            <div className="text-center flex flex-col items-center gap-5">
                {/* <AiOutlineHeart className='text-[#F1F1F1] text-[160px]' /> */}
                <h1 className='text-[#242424] text-[24px] md:text-[32px] lg:text-[40px] font-semibold'>This wishlist is empty.</h1>
                <p className='text-[#777777]'>You don't have any products in the wishlist yet. You will find a lot of interesting products on our "Shop" page.</p>
                <Link to='/'>
                    <button className="cursor-pointer px-4 py-2 bg-black text-white text-[14px] uppercase">Return To Shop</button>
                </Link>
            </div>
        </div>
    );
};

export default Wishlist;