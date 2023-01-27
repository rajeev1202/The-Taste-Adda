import appLogo from '../assets/images/the-taste-adda-logo.png';

const Header = () => (
    <div className="header-wrapper">
        {/* <div className="logo-container">
            <img src="/assets/images/the-taste-adda.webp" alt="The Taste Adda logo"/>
        </div> */}
        <ul className="header">
            <li><img className="app-logo" src={appLogo} alt="The Taste Adda logo"/></li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
);

export default Header;