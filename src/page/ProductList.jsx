import React from 'react'
import { Link } from 'react-router-dom';
const ProductList = ({ products }) => {

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Product List</h2>
        <Link to="/createproduct">
                    <button className="btn btn-primary">Create Product</button>
                </Link>
            </div>
            <table className="table table-bordered  table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                  {products.map((items,i) => (
                    <tr key={i}>
                      <td>
                        <Link className='link-offset-2 link-underline link-underline-opacity-0 dark link-body-emphasis link-offset-2 link-underline-opacity-75-hover' 
                        to={`/productdetail`}
                        state={items}>
                        {items.ProductName}
                        </Link>
                      </td>
                      <td> 
                        {items.ProductColor}
                      </td>
                      <td>
                        {items.ProductQuantity}
                      </td>
                      <td>
                        ${items.ProductPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
      </div>
    
  )
}

export default ProductList;