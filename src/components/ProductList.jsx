
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from redux
import { FaSearch } from 'react-icons/fa'; // Search icon
import ProductItem from './ProductItem'; // Import ProductItem
import useFetchProducts from '../hooks/useFetchProducts'; // Custom hook for fetching products
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import './ProductList.css'; 

const ProductList = () => {
    const [searchQuery, setSearchQuery] = useState(''); // State for search query
    const { products, loading, error } = useFetchProducts(); // Fetch products from API
    const dispatch = useDispatch(); // Get the dispatch function

    // Filter products based on the search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query state
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch action to add product to cart
    };

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>Error fetching products: {error}</div>; // Show error message

    return (
        <div className="product-list">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
                <button className="search-button">
                    <FaSearch />
                </button>
            </div>
            <div className="products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                            onAddToCart={handleAddToCart} // Pass the handler to ProductItem
                        />
                    ))
                ) : (
                    <p>No products found.</p> // Show message if no products match the search
                )}
            </div>
        </div>
    );
};

export default ProductList;

