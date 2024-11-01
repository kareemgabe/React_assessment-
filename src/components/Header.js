
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { totalItems, totalPrice } = useCart();

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <h1>Product Store</h1>
                </Link>
                <nav className="nav-links">
                    <Link to="/cart" className="cart-link">
                        Cart ({totalItems} items) - ${totalPrice.toFixed(2)}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

