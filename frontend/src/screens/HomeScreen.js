import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match, history }) => {
    const dispatch = useDispatch();

    const productsList = useSelector(state => state.products);
    const { loading, error, products } = productsList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Header />

            <div className="products">

                {
                    loading ? <Spinner /> : error ? <Message>{error}</Message> :
                        <>
                            <h1 className="title">Latest <span>Products</span></h1>
                            <div className="products-list">

                                {
                                    products.map(product => (
                                        <Product
                                            key={product._id}
                                            product={product}
                                            history={history}
                                            match={match}
                                        />
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}

export default HomeScreen;
