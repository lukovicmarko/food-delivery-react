import React from 'react';
import { useSelector } from 'react-redux';

const CartCount = () => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    return (
        <div className="cart-count">
            {cartItems.length}
        </div>
    )
}

export default CartCount;
