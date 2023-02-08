import appLogo from '../assets/images/the-taste-adda-logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header-wrapper">
        {/* <div className="logo-container">
            <img src="/assets/images/the-taste-adda.webp" alt="The Taste Adda logo"/>
        </div> */}
        <ul className="header">
            <li><img className="app-logo" src={appLogo} alt="The Taste Adda logo"/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    </div>
);

export default Header;