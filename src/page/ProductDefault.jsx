// import React from 'react'
// import { createContext, useState } from "react";
// import { Outlet } from 'react-router-dom';
// export const ProductContext = createContext();
// const initialProducts = [
//     {
//         "ProductName": "Cotton Crew Neck T-Shirt",
//         "ProductDescription": "Soft, comfortable, and stylish cotton crew neck t-shirt.",
//         "ProductCategory": "Apparel",
//         "ProductPrice": 19.99,
//         "ProductQuantity": 50,
//         "ProductBrand": "Your Brand Name",
//         "ProductColor": "Black",
//         "ProductSize": "Medium"
//     },
//     {
//         "ProductName": "Jeans",
//         "ProductDescription": "Classic denim jeans with a comfortable fit.",
//         "ProductCategory": "Apparel",
//         "ProductPrice": 49.99,
//         "ProductQuantity": 30,
//         "ProductBrand": "Your Brand Name",
//         "ProductColor": "Blue",
//         "ProductSize": "Medium"
//     },
//     {
//         "ProductName": "Sneakers",
//         "ProductDescription": "Comfortable and stylish sneakers for everyday wear.",
//         "ProductCategory": "Footwear",
//         "ProductPrice": 59.99,
//         "ProductQuantity": 25,
//         "ProductBrand": "Your Brand Name",
//         "ProductColor": "White",
//         "ProductSize": "8"
//     }
//   ];
 
//   export const  ProductDefault = ({child}) => {
//       const [products,setProducts]=useState(initialProducts);
//       const addProduct = (n) => {
//         setProducts([...products, n]);
//     };
//     return (
//         <ProductContext.Provider value={{ products, addProduct }}>
//             {child}
//             <Outlet/>
//         </ProductContext.Provider>
//     );
// }

