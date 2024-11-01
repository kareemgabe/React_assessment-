
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, totalItems, totalPrice, incrementQuantity, decrementQuantity } = useCart();

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className="product-info">
                                <img src={item.image} alt={item.title} className="product-image" />
                                <h3>{item.title}</h3>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td className="quantity-controls">
                                <button onClick={() => decrementQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => incrementQuantity(item.id)}>+</button>
                            </td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart-summary">
                <h3>Total Items: {totalItems}</h3>
                <h3>Total Price: <span className="total-price">${totalPrice.toFixed(2)}</span></h3>
              {/*
    <button className="checkout-button">Proceed to Checkout</button>
*/}
            </div>
        </div>
    );
};

export default CartPage;
