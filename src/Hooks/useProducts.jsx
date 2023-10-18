import { useQuery } from "@tanstack/react-query";


const useProducts = () => {
    const {data:products=[],refetch} = useQuery({
        queryKey:['products'],
        queryFn:async() =>{
            const res = await fetch('products.json')
            return res.json()
        }
    })
    return [products,refetch]
};

export default useProducts;