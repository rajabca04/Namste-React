import { CDN_url } from "../utils/contants";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={CDN_url} />
        <h1 className="typingEffact" >Foodeworld.eat</h1>
      </div>
      <div className="nav-items">
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
