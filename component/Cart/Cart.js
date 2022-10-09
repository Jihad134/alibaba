import React from 'react';
import"./Cart.css"
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let shiping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity +product.quantity
        total=total + product.price*product.quantity 
        shiping=shiping + product.shipping
    }
    const tax=parseFloat((total*0.1).toFixed(2));
    const grand=total+shiping+tax;
    return (
        <div className='stiky'>
            <h4>product cart</h4>
            <p>Selected items:{quantity}</p>
            <p>Total Price:{total}</p>
            <p>Shiping:{shiping}</p>
            <p>Tax:{tax}</p>
            <h3>Grand Total:{grand}</h3>
        </div>
    );
};

export default Cart;
