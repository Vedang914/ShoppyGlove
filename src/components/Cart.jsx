// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import './Cart.css'; 

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id)); // Dispatch the action to remove the item
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.images[0]} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{item.title}</h3>
                                <p className="cart-item-description">{item.description}</p>
                                <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
                                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <p>Total Price: ${calculateTotalPrice()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
