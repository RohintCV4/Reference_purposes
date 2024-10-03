import React from 'react'
import { useLocation } from 'react-router-dom'
const ProductDetail = () => {

  const location=useLocation();
  // console.log(location.state);  
  
  
  
  return (
    <div style={{ backgroundColor: 'rgb(220, 228, 228)' }} className='pt-5 pb-5 vh-100'>
      <div className='col-6 mx-auto'>
      <div className='card border-0 p-5 rounded-4'>
      <div className='fw-semibold fs-2 text-center'>Product Description</div>
      <br /> 
      <p ><strong className='px-2 text-muted'>Product Name:</strong>{location.state.ProductName}</p>
      <p ><strong className='px-2 text-muted'>Product Description:</strong>{location.state.ProductDescription}</p>
      <p><strong className='px-2 text-muted'>Product Category:</strong>{location.state.ProductCategory}</p>
      <p><strong className='px-2 text-muted'>Product Price:</strong>{location.state.ProductPrice}</p>
      <p><strong className='px-2 text-muted'>Product Brand:</strong>{location.state.ProductBrand}</p>
      <p><strong className='px-2 text-muted'>Product Color:</strong>{location.state.ProductColor}</p>
      <p><strong className='px-2 text-muted'>Product Size:</strong>{location.state.ProductSize}</p>

      <p><strong className='px-2 text-muted'>Product Quantity:</strong>{location.state.ProductQuantity}</p>
      </div>
      </div>
    </div>
  )
}

export default ProductDetail