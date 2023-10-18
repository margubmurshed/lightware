/** @format */

import { createBrowserRouter } from "react-router-dom";
import Products from "../Layout/Products";
import OurProducts from "../ProductsPage/OurProducts/OurProducts";
import ProductDetails from "../ProductsPage/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Products></Products>,
        children: [
            {
                path: '/',
                element: <OurProducts></OurProducts>  
            },
            {
                path: '/productdetails/:id',
                element: <ProductDetails></ProductDetails> 
            }
        ]
    }
])
