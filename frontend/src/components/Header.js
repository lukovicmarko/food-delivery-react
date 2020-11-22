import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-content__container">
                    <h2 className="header-content__restaurant">Restaurant</h2>
                    <h1 className="header-content__title">
                        Good F
                    <span>
                            <img src="./images/sample_4.png" className="food-img" alt="" />
                        </span>
                        <span>
                            <img src="./images/sample_5.png" className="food-img" alt="" />
                        </span>
                    d
                </h1>
                    <h1 className="header-content__title">
                        Good M
                    <span>
                            <img src="./images/smile.png" className="smile" alt="" />
                        </span>
                        <span>
                            <img src="./images/smile.png" className="smile" alt="" />
                        </span>
                    d
                </h1>
                    <p className="header-content__subtitle">
                        The food palace is an neighborhood restaurent serving seasonal
                        global cuisine driven by faire.
                    </p>

                    <Link to="/" className="menu-btn">Explore Food Menu</Link>
                </div>
            </div>
            <div className="header-image">
                <img src="./images/sample_2.png" alt="" />
            </div>
        </header>

    )
}

export default Header
