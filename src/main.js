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

import Header from "./component/Header";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Body from "./component/Body";
import Error from "./component/Error";
import About from "./component/About";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

// Confrigration for routing.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu/>,
        errorElement: <Error/>
      }

    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

