import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Spinner from '../components/Spinner';
import Rating from '../components/Rating';
import Button from '../components/Button';
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import { FaAngleLeft } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);

    const { loading, error, product } = productDetails;
    const { _id, name, image, price, rating, reviews, numReviews, countInStock, description } = product;


    const addToCartHandler = () => {
        history.push(`/cart/${_id}?qty=${qty}`);
    }

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));

    }, [dispatch, match]);


    return (
        <div style={{ padding: '3rem 10rem' }}>
            <Link to="/" >
                <div className="btn" >
                    <FaAngleLeft />
                </div>
            </Link>
            {
                loading ? <Spinner /> : error ? <Message>{error}</Message> : (
                    <div className="product-details">
                        <div className="product-details__content">
                            <img src={image} className="product-image" alt="product.png" />
                            <div className="info">
                                <div className="info-stock" style={{ backgroundColor: countInStock ? '#70cc29' : 'red' }}>
                                    {countInStock > 0 ? 'In stock' : 'Sold out'}
                                </div>
                                <div className="info-container">
                                    <h2>{name}</h2>
                                    <div className="quantity">
                                        <Rating value={rating} />
                                        <h1>{price} $</h1>

                                        <div className="quantity-buttons">
                                            <Button
                                                text="Add to cart"
                                                buttonFn={addToCartHandler}
                                                countInStock={countInStock}
                                            />
                                            <div className="quantity-buttons__btn">
                                                <div className="btn" onClick={() => {
                                                    if (qty > countInStock) {
                                                        return;
                                                    } else {
                                                        setQty(qty + 1);
                                                    }
                                                }}>
                                                    <BiPlus />
                                                </div>
                                                <div className="qty">{qty}</div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-details__description">
                            <Tabs>
                                <Tab label="Description">
                                    <p>{description}</p>
                                </Tab>
                                <Tab label="Reviews">
                                    <p>{reviews}</p>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ProductScreen
