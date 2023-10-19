import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiFillEye, AiFillHeart } from 'react-icons/ai';
import { GiNetworkBars } from 'react-icons/gi';

import './ProductCard.css'

import { Link } from 'react-router-dom';
import Model from '../../ProductsPage/QuickViewModel/Model';



const ProductCard = ({ productData }) => {
    const { featuredImage, title, price, review,discount,_id } = productData

    const newPrize = price-(discount*price/100);
  
    const [isOpen, setIsOpen] = useState(false)

    const [productId,setProductId] = useState(0)

    const handleModel =(id) =>{
        setProductId(id)
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className='mx-3 border rounded-md relative main-card cursor-pointer'>
                <div>
                    <img className='w-full h-full rounded-md' src={featuredImage} alt="" />
                    <div className='top-[4%] left-0 absolute icon-set'>
                        <div className='flex items-center space-x-2 wishCard cursor-pointer'>
                            <p className='text-xl'><AiFillHeart></AiFillHeart></p>
                            <p className='px-2 py-1 text-sm bg-[#9D4D4A] rounded-md text-white wishlist'>Add To Wish List</p>
                        </div>

                       <Link to={`/productsdetails/${_id}`}>
                       <div className='flex items-center space-x-2 wishCard cursor-pointer'>
                            <p className='text-xl'><GiNetworkBars></GiNetworkBars></p>
                            <p className='px-2 py-1 text-sm bg-[#9D4D4A] rounded-md text-white wishlist'>View Details</p>
                           
                        </div>
                       </Link>
                        

                        <div onClick={() =>handleModel(_id)} className='flex items-center space-x-2 wishCard cursor-pointer'>
                            <p className='text-xl'><AiFillEye></AiFillEye></p>
                            <p className='px-2 py-1 text-sm bg-[#9D4D4A] rounded-md text-white wishlist'>Quick View</p>
                        </div>
                        <Model isOpen={isOpen} setIsOpen={setIsOpen} productData={productData}></Model>
                        
                        
                    </div>
                </div>
                <div className='px-4 py-4 cursor-pointer'>

                    <div className='flex items-center space-x-2'>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={review}
                            readOnly
                        />
                        <p>({review})</p>
                    </div>

                    <h2 className='py-2 border-b'>{title}</h2>
                    <div className='flex items-center space-x-3 py-2'>
                        <p className='text-[#9D4D4A]'>${newPrize}</p>
                        <p className='text-[#6b6b6b]'><del>${price}</del></p>
                    </div>
                    
                    <div className='bg-[#EFEFEF] space-x-2 rounded-lg flex items-center justify-center py-2 text-[#6e6e6e] font-medium hover:bg-[#9D4D4A] hover:text-white duration-300'>
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                        <button>ADD TO CART</button>
                    </div>
                    
                </div>
            </div>

           <div className='demo'>

           </div>

        </div>
    );
};

export default ProductCard;