import { useQuery } from "@tanstack/react-query";


const useProducts = () => {
    const {data:products=[],refetch} = useQuery({
        queryKey:['products'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/products')
            return res.json()
        }
        
    })
    console.log(products)
    return [products,refetch]
    
};

export default useProducts;