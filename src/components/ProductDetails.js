import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import useFetch from '../hooks/useFetch';
import { fetchProductDetails } from '../services/productService';
import Spinner from './Spinner';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { data: product, loading, error } = useFetch(fetchProductDetails, id);

    if (loading) return <Spinner />;
    if (error) return <p>Error loading product details.</p>;

    return (
        <div className="product-details-container">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-category">{product.category} | <span className="in-stock">In stock</span></p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <h3>Description</h3>
                <p className="product-description">{product.description}</p>
                <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
