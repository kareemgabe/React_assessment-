
import React, { createContext, useState, useContext } from 'react';
import Toast from '../components/Toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [toastMessage, setToastMessage] = useState('');

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setToastMessage(`${product.title} added to cart`);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    // Define incrementQuantity and decrementQuantity functions
    const incrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const closeToast = () => setToastMessage('');

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                totalItems,
                totalPrice
            }}
        >
            {children}
            {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
        </CartContext.Provider>
    );
};
