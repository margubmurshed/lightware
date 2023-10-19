import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'
import { Rating } from '@smastrom/react-rating';

import { AiFillHeart } from 'react-icons/ai';
import ProductsReview from '../ProductsReview/ProductsReview';
import SimilarProducts from '../SimilarProducts/SimilarProducts';




const ProductDetails = () => {
    const { id } = useParams()
    const [singleInfo, setSingleInfo] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/products?id=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSingleInfo(data[0])
            })
    }, [])

    const {discount,code,availability,description,price,review,featuredImage,brand
    } = singleInfo

    const newPrize = price-(discount*price/100);

    return (
        <div>
            <div className='relative details-banner'>

                <div className='detailshead flex text-white space-x-2'>
                    <Link to='/'>
                        <p className='cursor-pointer'><span className=' hover:border-b'>Home</span> <span className='px-2'>/</span></p>
                    </Link>
                    <p>Product Details</p>
                </div>
            </div>


            <div className='px-12 py-12 grid lg:grid-cols-2 gap-6'>
                 <div>
                 <img className='rounded-2xl w-full' src={featuredImage} alt="" />
                 </div>

                 <div>
                 <h2>{singleInfo.title}</h2>
                 <div className='flex items-center space-x-2'>
                        <Rating
                            style={{ maxWidth: 80 }}
                            value={review}
                            readOnly
                        />
                        <p>({review})</p>
                    </div>
                    <div className='flex item-center space-x-4 py-4'>
                        <p className='bg-[#FFCD05] px-2 py-1 text-[#262626] text-sm text-medium'>-{discount}%</p>
                        <p className='font-medium text-[red]'>${newPrize}</p>
                        <p className='text-[#DDDEE2]'><del>${price}</del></p>
                    </div>
                    <div className='space-y-2'>
                         <p>Brand:<span className='px-2 text-[red]'>{brand}</span></p>
                         <p>Availability:<span className='px-2 text-[red]'>{availability}</span> </p>
                         <p>SKU:<span className='px-2 text-[red]'>{code}</span></p>
                    </div>
                    <h2 className='py-4'>{description}</h2>

                    <div className='flex item-center flex-wrap space-x-8 lg:gap-0 gap-4'>
                          <div className='flex item-center space-x-2'>
                            <p className='pt-2'>Qty:</p>
                            <input className='border py-2 outline-none inline-block px-4 rounded-xl' type="number" placeholder='1' />
                          </div>
                          <div className='flex item-center lg:flex-nowrap lg:gap-0 gap-4 flex-wrap  space-x-2'>
                             <p className='py-2 px-3 rounded-full bg-[#EFEFEF] text-[#363C45] text-xl hover:bg-[#9D4D4A] hover:text-white duration-300'><AiFillHeart></AiFillHeart></p>
                             <button className='lg:px-16 py-2 w-full rounded-xl bg-[red] text-white font-semibold hover:bg-[#9D4D4A] duration-300'>ADD TO CART</button>
                          </div>
                    </div>
                    <div className='py-8'>
                          <button className='bg-[#E51515] px-4 py-3 text-white font-bold  w-full rounded-xl hover:bg-[#9D4D4A] hover:text-white duration-300'>BUY IT NOW</button>
                    </div>
                   
                 </div>
            </div>
            <ProductsReview singleInfo={singleInfo}></ProductsReview>
            <SimilarProducts></SimilarProducts>
        </div>
    );
};

export default ProductDetails;