import React from 'react';

const Button = ({ text, buttonFn, countInStock }) => {
    return (
        <button
            className={countInStock === 0 ? "disabled" : "button"}
            onClick={buttonFn}
            type="button"
            disabled={countInStock === 0}
        >
            {text}
        </button>
    )
}

export default Button;
