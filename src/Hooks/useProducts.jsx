import { useEffect, useState } from "react";


const useProducts = (selectedCategories=[]) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/products?categories=${selectedCategories.join(",")}`)
        .then(res => res.json())
        .then (data => {
            setProducts(data);
            setLoading(false);
        })
    }, [selectedCategories])
   
    return [products, loading ]
};

export default useProducts;