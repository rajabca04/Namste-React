// const heading = React.createElement("h1",
//  {
//     className: "main-heading",
//     id: "main-heading",
// }, "Hello World from React!");


// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, " h1 Hello i am raja calling form child"),
//     React.createElement("h2", {}, " h2 Namste react child"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, " h1 Hello i am raja calling form child"),
//     React.createElement("h2", {}, " h2 Hello i am raja calling form child"),
//   ]),
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// const heading = React.createElement("h1", { id: "heading" }, "Naste React 🤝");

// jsx ➡️ HTML like or XML like syntax

// const jsxHeading = (
//   <h1 id="heading" className="heading">
//     Naste React using JSX 🚀
//   </h1>
// );
// console.log(jsxHeading);

// React components
// 1st type: Class based component - OLD way to writing code in react

// 2nd type: Functional component - NEW way to writing code in react
// const Title = () => <h1>Namste React</h1>;

// we can also say it is component composition...
// const Component = () => (
//   <div>
    
//     <h1>This is functional component of react 🚀</h1>
//     {Title()}
//     <Title />
//     <Title></Title>
//     <h6>status : {200} ok</h6>
//   </div>
// )

import React from "react";

import ReactDOM from "react-dom/client";



/**
 * Header
 * - Logo
 * - Nav items
 * body
 * - search
 * - RestaurantContainer
 *   - RestaurantCard
 *      -img
 *      - name of res, Start rating, cuisine, price, delivery time
 * Footer
 * - copyright
 * - links
 * - address
 * - Contact
 */

const Header = ()=>{
  return(
    <div className="header">
      <div className="logo">
        <img className="logo-img" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"/>
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


const RestaurantCard = (props)=>{
  return(
    <div className="restaurant-card">
      <div className="res-card-img">
        <img className="res-img" style={{width:"140px", height:"140px"}} src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"/>
      </div>
      <div className="res-card-info">
      <h3>{props.resName}</h3>
      <h4>{props.cusien}</h4>
      <h4>{props.star}</h4>
      <h4>{props.deliveryTime}</h4>
      </div>
    </div>
  )
}

const Body = ()=>{
  return(
    <div className="body"> 
      <div className="Search">Search</div>
      <div className="Res-container">
        <RestaurantCard resName="raja's food" cusien="vagitable,indian" star="4.9" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        <RestaurantCard resName="raja's vaggi" cusien="vagitable,Bihar" star="4.8" deliveryTime="30 min"/>
        
      </div>
    </div>
  )
}
const AppLayout = ()=>{
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
