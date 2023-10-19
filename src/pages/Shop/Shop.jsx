import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";
import bannerImage from "../../assets/images/pexels-ksenia-chernaya-3965548.jpg"

const Shop = () => {
//   const [productLoadCount, setProductLoadCount] = useState(9); 
  const [selectedCategories, setSelectedCategories] = useState([]); 
//   const [productsLength, setProductsLength] = useState(0); 
  const [categoriesLoading, setCategoriesLoading] = useState(true); 
//   const [productsLengthLoading, setProductsLengthLoading] = useState(true); 
  const [categories, setCategories] = useState([]); 
  const [products, loading] = useProducts(selectedCategories);

  useEffect(() => {
    // fetch("http://localhost:5000/products-count")
    // .then(res => res.json())
    // .then(data => {
    //     setProductsLength(data)
    //     setProductsLengthLoading(false)
    // })
    fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data =>{
         setCategories(data);
         setCategoriesLoading(false)
        })
  }, [])

  const onCheckboxChange = e =>{
    const isChecked = e.target.checked;
    const value = e.target.value;
    if(isChecked) setSelectedCategories([...selectedCategories, value]);
    else setSelectedCategories(selectedCategories.filter(cat => cat !== value));
  }
  return (
    <div>
      <div className="relative text-center py-32 text-5xl text-white bg-cover bg-center" style={{backgroundImage: `url("${bannerImage}")`}}>
        <h3 className="relative z-10">Shop</h3>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-0"></div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-3 container mx-auto p-5">
        <div className="lg:w-1/5 border p-3 rounded-md h-fit">
          <div>
            <h4 className="font-semibold">Catagories</h4>
            <div className="p-2">
              {categories.map((category) =>  (
                  <div className="flex items-center gap-3 capitalize ">
                    <input type="checkbox" name="" id="" onChange={onCheckboxChange} value={category}/>
                    <span>
                      {category}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="lg:w-4/5">
          {loading ? (
            <p className="text-center text-xl font-semibold">Loading...</p>
          ) : products.length ? (
            <div className="border rounded-md p-3">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
                {products.map((product) => (
                  <ProductCard productData={product} />
                ))}
              </div>
              {/* <div className="flex justify-center mt-5">
                {productsLength == productLoadCount && (
                  <button
                    onClick={() => setProductLoadCount(products.length + 9)}
                    className="mx-auto px-5 py-3 bg-amber-950 text-white rounded-md"
                  >
                    Load More
                  </button>
                )}
              </div> */}
            </div>
          ) : (
            <p className="text-center">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
