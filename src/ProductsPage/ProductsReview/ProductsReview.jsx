
import { useState } from 'react';
import './ProductsReview.css'

const ProductsReview = ({singleInfo}) => {

    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <div className='px-12 py-12'>
            <div className='flex  py-8 lg:space-x-4 lg:gap-0 gap-4 flex-wrap'>
                <button
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? " text-[#9D4D4A] font-bold px-6 py-2 text-lg  " : " px-6 py-2 text-lg font-bold"}>
                    DESCRIPTION
                </button>

                <button
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? " text-[#9D4D4A] font-bold px-6 py-2 text-lg  " : " px-6 py-2 text-lg font-bold"}>
                    REVIEWS
                </button>

                <button
                    onClick={() => toggleTab(3)}
                    className={toggle === 3 ? " text-[#9D4D4A] font-bold px-6 py-2 text-lg  " : " px-6 py-2 text-lg font-bold"}>
                    CUSTOM TAB
                </button>

                <button
                    onClick={() => toggleTab(4)}
                    className={toggle === 4 ? " text-[#9D4D4A] font-bold px-6 py-2 text-lg  " : " px-6 py-2 text-lg font-bold"}>
                    TAGS
                </button>
            </div>

            <div className='py-8'>
                <div className={toggle === 1 ? "content active-content" : "content"}>
                   {singleInfo.description}
                </div>

                <div className={toggle === 2 ? "content active-content" : "content"}>
                   <div>
                         <div className='w-full border px-4 py-6'>
                                <h2 className='text-xl font-medium'>Customer Reviews</h2>
                                <p className='py-2 text-[#6c6c6c]'>No reviews yet</p>
                         </div>

                         <div className='w-full border px-4 py-6 mt-4 relative'>
                                <h2 className='text-lg font-medium'>Write a review</h2>
                                <div className='py-4'>
                                     <form className='space-y-4'>
                                           <div className='flex flex-col space-y-1'>
                                               <label>Name</label>
                                               <input className='px-2 py-2 outline-none  border-[#929191] border' type="text" name="" placeholder='Enter your name' />
                                           </div>

                                           <div className='flex flex-col space-y-1'>
                                               <label>Email</label>
                                               <input className='px-2 py-2 outline-none border border-[#929191]' type="email" name="" placeholder='Enter your email' />
                                           </div>

                                           <div className='flex flex-col space-y-1'>
                                               <label>Review</label>
                                               <input className='px-2 py-2 outline-none border border-[#929191]' type="text" name="" placeholder='Enter review 0-5' />
                                           </div>

                                           <div className='flex flex-col space-y-1'>
                                               <label>Body of Review </label>
                                               <textarea className='px-2 py-4 outline-none border border-[#929191]' name="" id="" cols="30" rows="5" placeholder='Write your comment here'></textarea>
                                           </div>

                                           <div className='right-0 '>
                                              <input className='py-3 px-6 bg-[red] text-white text-lg font-semibold cursor-pointer hover:bg-[#9D4D4A] duration-300' type="submit" value="Submit review" />
                                           </div>

                                     </form>
                                </div>
                         </div>
                   </div>
                </div>

                <div className={toggle === 3 ? "content active-content" : "content"}>
                   <h2>You can add, text, html, images and videos as well to the tab from product settings area</h2>
                </div>

                <div className={toggle === 4 ? "content active-content" : "content"}>
                   <div className='flex items-center space-x-2'>
                       <p>Tags:</p>
                       <p className='text-[red]'>clothing , fashion , jeans , mens , shirts ,</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsReview;