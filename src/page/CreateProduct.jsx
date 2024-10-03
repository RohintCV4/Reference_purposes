import React, { useState } from 'react';
import Input from "../component/Input";
import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';

const CreateProduct = ({ addProduct }) => {
    const navigate = useNavigate();
    const data = [
        "ProductName",
        "ProductDescription",
        "ProductCategory",
        "ProductPrice",
        "ProductQuantity",
        "ProductBrand",
        "ProductColor",
        "ProductSize"
    ];

    const [product, setProduct] = useState({
        // ProductName: '',
        // ProductDescription: '',
        // ProductCategory: '',
        // ProductBrand: '',
        // ProductColor: '',
        // ProductSize: '',
        // ProductPrice: '',
        // ProductQuantity: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        navigate('/');
    };

    const handleClear = () => {
        setProduct({
            ProductName: '',
            ProductDescription: '',
            ProductCategory: '',
            ProductBrand: '',
            ProductColor: '',
            ProductSize: '',
            ProductPrice: '',
            ProductQuantity: ''
        });
    };

    return (
        <div style={{ backgroundColor: 'rgb(220, 228, 228)' }} className='pt-5 pb-5'>
            <div className='col-6 mx-auto'>
                <div className='card border-0 rounded-4'>
                <div class="card-header text-center fs-2 fw-bold border-0 pt-2 pb-2"> Create Order
                    </div>
                    <form className="card-body form " onSubmit={handleSubmit}>
                        
                        {/* Commented-out section for manual input fields */}
                        {/* 
                        <Input LabelName="Product Name:" type="text" name="ProductName" value={product.ProductName} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Description:" type="text" name="ProductDescription" value={product.ProductDescription} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Category:" type="text" name="ProductCategory" value={product.ProductCategory} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Price:" type="number" name="ProductPrice" value={product.ProductPrice} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Brand:" type="text" name="ProductBrand" value={product.ProductBrand} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Color:" type="text" name="ProductColor" value={product.ProductColor} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Size:" type="text" name="ProductSize" value={product.ProductSize} onChange={handleChange} className='form-control mb-3' />
                        <Input LabelName="Product Quantity:" type="number" name="ProductQuantity" value={product.ProductQuantity} onChange={handleChange} className='form-control mb-3' />
                        */}

                        {data.map((item, i) => (
                            <div key={i} className="mb-3">
                                <Input
                                    type={item.includes("Price") || item.includes("Quantity") ? "number" : "text"}
                                    LabelName={item}
                                    placeholder={item}
                                    className='form-control'
                                    name={item}
                                    value={product[item]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}

                        <div className="d-flex justify-content-end">
                            <Button classname="btn btn-primary me-3" type="submit" text="Submit"></Button>
                            <Button classname="btn btn-success" type="button" onClick={handleClear} text="Clear"></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;
