import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.image.png'; 
 
const Header = () => {
    const { totalItems } = useCart();

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <h1>Product Store</h1>
                </Link>
                <nav className="nav-links">
                    <Link to="/cart" className="cart-link">
                        <div className="cart-icon-container">
                            <img src={cartIcon} alt="Cart" className="cart-icon" />
                            {totalItems > 0 && (
                                <span className="cart-badge">{totalItems}</span>
                            )}
                        </div>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

