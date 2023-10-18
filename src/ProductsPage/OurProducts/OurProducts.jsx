import React, { useState } from 'react';
import Title from '../Title/Title';
import './OurProducts.css'
import Cloths from '../ProductsByCategory/Cloths/Cloths';
import Fashion from '../ProductsByCategory/Fashion/Fashion';
import Jewellery from '../ProductsByCategory/Jewellery/Jewellery';
import Featured from '../ProductsByCategory/Featured/Featured';
import NewProducts from '../NewProducts/NewProducts';
import BestSellProduct from '../BestSellProduct/BestSellProduct';
import Model from '../QuickViewModel/Model';


const OurProducts = () => {
    
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }

  
    return (
        <div>
            
        <div className='lg:px-20 px-12 py-6 bg-[#F8F8F8]'>
            <div>
                <Title
                    heading={'OUR PRODUCTS'}
                    subHeading={'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'}

                >

                </Title>
            </div>

            <div className='flex items-center justify-center py-8 lg:space-x-4 lg:gap-0 gap-4 flex-wrap'>
                <button
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? " bg-[#9D4D4A] px-6 py-2 text-lg font-medium text-white" : "border px-6 py-2 text-lg font-medium text-[#5f5f5f]"}>
                    Clothing
                </button>

                <button
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "bg-[#9D4D4A] px-6 py-2 text-lg font-medium text-white" : "border px-6 py-2 text-lg font-medium text-[#5f5f5f]"}>
                    Fashion
                </button>

                <button
                    onClick={() => toggleTab(3)}
                    className={toggle === 3 ? "bg-[#9D4D4A] px-6 py-2 text-lg font-medium text-white" : "border px-6 py-2 text-lg font-medium text-[#5f5f5f]"}>
                    Jewellery
                </button>

                <button
                    onClick={() => toggleTab(4)}
                    className={toggle === 4 ? "bg-[#9D4D4A] px-6 py-2 text-lg font-medium text-white" : "border px-6 py-2 text-lg font-medium text-[#5f5f5f]"}>
                    Featured
                </button>
            </div>

            <div className='py-8'>
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <Cloths></Cloths>
                </div>

                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <Fashion></Fashion>
                </div>

                <div className={toggle === 3 ? "content active-content" : "content"}>
                    <Jewellery></Jewellery>
                </div>

                <div className={toggle === 4 ? "content active-content" : "content"}>
                    <Featured></Featured>
                </div>
            </div>
        </div>

        <NewProducts></NewProducts>
        <BestSellProduct></BestSellProduct>
        
        </div>
    );
};

export default OurProducts;