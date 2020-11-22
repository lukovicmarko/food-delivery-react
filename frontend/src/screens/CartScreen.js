import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { BiPlus, BiMinus } from "react-icons/bi";


const CartScreen = ({ match, location, history }) => {

    const [qty, setQty] = useState(location.search ? Number(location.search.split('=')[1]) : 1);

    const productId = match.params.id;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const checkouttHandler = () => {
        history.push('/login?redirect=shipping');
    }

    const removeItem = id => {
        const confirm = window.confirm('Are u sure you want to remove this phone from cart?');

        if (confirm) {
            dispatch(removeFromCart(id));
        } else {
            return false;
        }
    }


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);



    return (


        <div className="cart">
            <h1 className="title">Your <span>Cart</span></h1>
            {
                cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <div className="cart-empty__items">
                            <Link className="btn-light" to="/" >
                                <i className="fas fa-angle-left"></i>
                            </Link>
                            <h1>Your cart is empty</h1>
                        </div>
                        <img src="images/empty-cart.png" alt="" />
                    </div>
                ) : (
                        <div className="cart-content">
                            <div className="cart-content__items">
                                {
                                    cartItems.map(item => (
                                        <div className="cart-item" key={item.id}>
                                            <div className="cart-item__content">
                                                <img src={item.image} className="cart-item__image" alt="" />
                                                <div>
                                                    <h3>{item.name}</h3>
                                                    <p className="cart-item__price">{item.price} $</p>
                                                </div>

                                            </div>

                                            <div className="quantity-buttons__btn">
                                                <div className="btn" onClick={() => {
                                                    if (item.qty > item.countInStock) {
                                                        return;
                                                    } else {
                                                        setQty(qty + 1);
                                                        // dispatch(addToCart(item.id, qty));
                                                    }
                                                }}>
                                                    <BiPlus />
                                                </div>
                                                <div className="qty">{item.qty}</div>
                                                <div className="btn" onClick={() => {
                                                    if (qty <= 1) {
                                                        return;
                                                    } else {
                                                        setQty(qty - 1);
                                                    }
                                                }}>
                                                    <BiMinus />
                                                </div>
                                            </div>

                                            <i className="fas fa-trash" onClick={() => removeItem(item.id)}></i>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="cart-content__subtotal">
                                <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                                <p>$ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</p>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={checkouttHandler}
                                    type="button"
                                    disabled={cartItems.length === 0}
                                    style={{
                                        backgroundColor: cartItems.length === 0 ? '#BEBEBD' : '#22BBA7'
                                    }}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )
            }

        </div>

    )
}

export default CartScreen;
