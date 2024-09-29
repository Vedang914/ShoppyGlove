
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing icon
import './AddToCartButton.css'; 

const AddToCartButton = ({ onClick }) => {
    return (
        <button className="add-to-cart-button" onClick={onClick}>
            <FaShoppingCart className="icon" /> {/* Shopping cart icon */}
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
