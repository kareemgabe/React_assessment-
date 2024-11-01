
import React from 'react';
import ProductCard from './ProductCard';
import useFetch from '../hooks/useFetch';
import { fetchProducts } from '../services/productService';
import Spinner from './Spinner';

const ProductList = () => {
    const { data: products, loading, error } = useFetch(fetchProducts);

    if (loading) return <Spinner />;
    if (error) return <p>Error loading products.</p>;

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
