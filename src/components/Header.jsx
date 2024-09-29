import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Header.css'; 

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">ShoppyGlobe</Link>
            </div>
            <nav className="nav-links">
                <Link to="/" className="nav-item">
                    <FaHome /> Home
                </Link>
                <Link to="/cart" className="nav-item">
                    <FaShoppingCart />
                    Cart
                    {totalItems > 0 && (
                        <span className="cart-count">{totalItems}</span>
                    )}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
