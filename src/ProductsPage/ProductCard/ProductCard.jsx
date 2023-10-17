import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react';
import { AiOutlineShoppingCart,AiFillEye,AiFillHeart } from 'react-icons/ai';
import { GiNetworkBars } from 'react-icons/gi';

import './ProductCard.css'

const ProductCard = ({ productData }) => {
    const { id, image, title, newprice, oldprice, review } = productData

    const [popupContent, setPopupContent] = useState([])
    const [popupTogle, setPopupTogle] = useState(false)
    const changeContent = (productData) => {
        setPopupContent([productData])
        setPopupTogle(!popupTogle)
    }
    return (
        <div>
        <div className='mx-3 border rounded-md relative main-card cursor-pointer'>
            <div>
                <img className='w-full h-full rounded-md' src={image} alt="" />
                <div className='top-[4%] left-0 absolute icon-set'>
                    <div className='flex items-center space-x-2 wishCard cursor-pointer'>
                            <p className='text-xl'><AiFillHeart></AiFillHeart></p>
                            <p className='px-2 py-1 text-sm bg-[#9D4D4A] rounded-md text-white wishlist'>Add To Wish List</p>
                    </div>

                    <div  className='flex items-center space-x-2 wishCard cursor-pointer'>
                        <p className='text-xl'><GiNetworkBars></GiNetworkBars></p>
                        <p className='px-2 py-1 text-sm bg-[#9D4D4A] rounded-md text-white wishlist'>View Details</p>
                    </div>

                    <div onClick={() => changeContent(productData)} className='flex items-center space-x-2 wishCard cursor-pointer'>
                        <p className='text-xl'><AiFillEye></AiFillEye></p>
                        <p className='px-2 py-1 text-sm bg-[#9D4D4A] rounded-md text-white wishlist'>Quick View</p>
                    </div>
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
                    <p className='text-[#9D4D4A]'>${newprice}</p>
                    <p className='text-[#6b6b6b]'><del>${oldprice}</del></p>
                </div>
                <div className='bg-[#EFEFEF] space-x-2 rounded-lg flex items-center justify-center py-2 text-[#6e6e6e] font-medium hover:bg-[#9D4D4A] hover:text-white duration-300'>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>

        <div>
        {
                popupTogle && <div className='popup-container' onClick={changeContent}>
                    <div className='popup-body' onClick={(e) => e.stopPropagation()}>
                        <div className='popup-header'>
                            <button onClick={changeContent} className='px-4 py-2 bg-[#262626] text-white cursor-pointer'>close</button>
                        </div>
                        <div className='popup-content'>
                            {
                                popupContent.map((pop, index) => {
                                    return (
                                        <div key={index}>
                                            <h2 className='text-white'>{pop.title}</h2>
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </div>

        </div>
    );
};

export default ProductCard;