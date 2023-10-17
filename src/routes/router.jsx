/** @format */

import { createBrowserRouter } from "react-router-dom";
import Products from "../Layout/Products";
import OurProducts from "../ProductsPage/OurProducts/OurProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Products></Products>,
        children: [
            {
                path: '/',
                element: <OurProducts></OurProducts>  
            }
        ]
    }
])
