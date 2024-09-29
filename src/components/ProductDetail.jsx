import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                setProduct(data); // Store the entire product object
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="product-detail">
            {product ? (
                <>
                    <h2>{product.title}</h2>
                    <img src={product.images[0]} alt={product.title} className="product-image" />
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Description: {product.description}</p>
                    
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetail;
