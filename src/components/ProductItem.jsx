
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import './ProductItem.css'; 

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-item">
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
