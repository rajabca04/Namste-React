import {CDN_url} from "../utils/contants";
export const Header = ()=>{
    return(
      <div className="header">
        <div className="logo">
          <img className="logo-img" src={CDN_url}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About </li>
            <li>Conact Us </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  
  export default Header;