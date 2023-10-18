import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams()
    const [singleData,setSingleData] = useState([])
    useEffect(() =>{
        fetch(`products.json/${id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    },[])
    return (
        <div>
            this is details page
        </div>
    );
};

export default ProductDetails;