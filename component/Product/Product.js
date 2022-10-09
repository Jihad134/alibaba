import React from 'react';
import"./Product.css"
const Product = ({AddEvenHandeler,product}) => {
    const {img,name,price,seller,ratings}=product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="" />
                <div className='product-info'>
                <p>{name}</p>
                <p><small>price:{price}</small></p>
                <p><small>{seller}</small></p>
                <p><small>{ratings}</small></p>
                </div>
                <button onClick={()=>AddEvenHandeler(product)}
                 className='AddtoCart'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;