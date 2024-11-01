import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <div className="product-card">
        <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3 >{product.title}</h3>
            <p>${product.price}</p>
        </Link>
    </div>
);

export default ProductCard;
