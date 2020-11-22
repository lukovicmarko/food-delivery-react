import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { RiShoppingBagLine } from "react-icons/ri";

const Product = ({ product }) => {
    const { _id, name, image, price, countInStock, rating, numReviews } = product;

    return (
        <div className="card">
            <div className="card-image">
                <Link to={`/product/${_id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="card-content">
                <div className="card-content__container">
                    <Rating value={rating} />
                    <Link to={`/product/${_id}`}>
                        <h2>{name}</h2>
                    </Link>
                    <div className="size">1800gr</div>
                    <h2 className="price">{price} <span>$</span></h2>
                </div>
                <div className="card-content__cart">
                    <div className="btn">
                        <RiShoppingBagLine className="bag" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
