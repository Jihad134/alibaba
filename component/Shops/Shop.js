import React, { useEffect, useState } from 'react';
import { addToDb, getLocalStore } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css'
const Shop = () => {
    const [cart,setCart]=useState([])
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data=>setProduct(data))
    },[])

    useEffect(()=>{
        const storTCart=getLocalStore()
        const savecart=[]
        for(const id in storTCart){
           const addedProduct=products.find(product=>product.id===id) 
           if(addedProduct){
            const quantity=storTCart[id]
            addedProduct.quantity=quantity
            savecart.push(addedProduct)
           }
           
        }
        setCart(savecart)
    },[products])

    const AddEvenHandeler=(product)=>{
        const exists=cart.find(praduct=>praduct.id===product.id)
        let newcart=[];
        if(!exists){
            product.quantity=1;
            newcart=[...cart,product]
        }
        else{
            const rest=cart.filter(praduct=>praduct.id!==product.id)
            exists.quantity=exists.quantity+1;
            newcart=[...rest,exists]
        }
        setCart(newcart) 


        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
           <div className="product-container">
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                AddEvenHandeler={AddEvenHandeler}
               
                ></Product>)
            }
           </div>
           <div className="product-summary">
            <Cart
             cart={cart}
            ></Cart>
           </div>
        </div>
    );
};

export default Shop;