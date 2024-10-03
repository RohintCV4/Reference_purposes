// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListItems from './page/ListItems';
import ProductList from './page/ProductList';
import ProductDetail from './page/ProductDetail';
import CreateProduct from './page/CreateProduct';
// import ProductDefault from './page/ProductDefault';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoAxios from './page/DemoAxios';
import About from './page/About';
// const App = () => {
//   const [products,setProducts]=new useState([
//     {
//       "Product Name": "Cotton Crew Neck T-Shirt",
//       "Product Description": "Soft, comfortable, and stylish cotton crew neck t-shirt.",
//       "Product Category": "Apparel",
//       "Product Price": 19.99,
//       "Product Quantity": 50,
//       "Product Brand": "Your Brand Name",
//       "Product Color": "Black",
//       "Product Size": "Medium"
//   },
//   {
//       "Product Name": "Jeans",
//       "Product Description": "Classic denim jeans with a comfortable fit.",
//       "Product Category": "Apparel",
//       "Product Price": 49.99,
//       "Product Quantity": 30,
//       "Product Brand": "Your Brand Name",
//       "Product Color": "Blue",
//       "Product Size": "Medium"
//   },
//   {
//       "ProductName": "Sneakers",
//       "ProductDescription": "Comfortable and stylish sneakers for everyday wear.",
//       "ProductCategory": "Footwear",
//       "ProductPrice": 59.99,
//       "ProductQuantity": 25,
//       "ProductBrand": "Your Brand Name",
//       "ProductColor": "White",
//       "ProductSize": "8"
//   }
//   ]);
  
//   const addProduct = (n) => {
//     setProducts([...products, n]);
// };

const initialProducts = [
  {
      "ProductName": "Cotton Crew Neck T-Shirt",
      "ProductDescription": "Soft, comfortable, and stylish cotton crew neck t-shirt.",
      "ProductCategory": "Apparel",
      "ProductPrice": 19.99,
      "ProductQuantity": 50,
      "ProductBrand": "Your Brand Name",
      "ProductColor": "Black",
      "ProductSize": "Medium"
  },
  {
      "ProductName": "Jeans",
      "ProductDescription": "Classic denim jeans with a comfortable fit.",
      "ProductCategory": "Apparel",
      "ProductPrice": 49.99,
      "ProductQuantity": 30,
      "ProductBrand": "Your Brand Name",
      "ProductColor": "Blue",
      "ProductSize": "Medium"
  },
  {
      "ProductName": "Sneakers",
      "ProductDescription": "Comfortable and stylish sneakers for everyday wear.",
      "ProductCategory": "Footwear",
      "ProductPrice": 59.99,
      "ProductQuantity": 25,
      "ProductBrand": "Your Brand Name",
      "ProductColor": "White",
      "ProductSize": "8"
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (n) => {
      setProducts([...products, n]);
  };
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/listitems" Component={ListItems } />
          <Route path="/demoaxios" Component={DemoAxios } />
          <Route path="/about" Component={About } />
          <Route path="/" element={<ProductList products={products}/>}/>
          <Route path="/productdetail" element={<ProductDetail/>}/>
          <Route path="/createproduct" element={<CreateProduct addProduct={addProduct}/>} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
