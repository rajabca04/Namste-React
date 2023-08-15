import { CDN_url } from "../utils/contants";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={CDN_url} />
        <h1 className="typingEffact">Foodeworld.eat</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Conact</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
