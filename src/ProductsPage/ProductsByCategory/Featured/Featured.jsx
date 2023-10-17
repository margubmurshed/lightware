import React from 'react';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../../ProductCard/ProductCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
            <BsArrowLeftShort></BsArrowLeftShort>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <BsArrowRightShort></BsArrowRightShort>
        </div>
    )
}

const Featured = () => {
    const [products] = useProducts([])
    const cloths = products.filter((product) => product.category === 'featured')

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll:1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    cloths.map(cloth => <ProductCard key={cloth.id} productData={cloth}></ProductCard>)
                } 
            </Slider>
        </div>
    );
};

export default Featured;