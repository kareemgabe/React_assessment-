// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
// import { CartProvider } from './context/CartContext';
// import './styles/styles.css';

// const App = () => (
//     <CartProvider>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/product/:id" element={<ProductDetailPage />} />
//                 <Route path="/cart" element={<CartPage />} />
//             </Routes>
//         </Router>
//     </CartProvider>
// );

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import './styles/styles.css';

const App = () => (
    <CartProvider>
        <Router basename="/React_assessment-">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    </CartProvider>
);

export default App;
