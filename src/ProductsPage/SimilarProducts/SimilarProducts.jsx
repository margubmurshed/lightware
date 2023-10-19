import React from 'react';
import Title from '../../Components/Title/Title';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../Components/ProductCard/ProductCard';

const SimilarProducts = () => {
    const [products] = useProducts([])
    return (
        <div className='px-12 py-6'>
            <div className='py-6'>
                <Title
                    heading={'RELATED PRODUCTS'}
                    subHeading={'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'}

                >

                </Title>
            </div> 

            <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:gap-0 gap-4'>
                  {
                    products.slice(0,4).map(product =><ProductCard key={product._id} productData={product}>

                    </ProductCard>)
                  }
            </div>

        </div>
    );
};

export default SimilarProducts;