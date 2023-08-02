// const heading = React.createElement("h1",
//  {
//     className: "main-heading",
//     id: "main-heading",
// }, "Hello World from React!");

import React from "react";

import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, " h1 Hello i am raja calling form child"),
    React.createElement("h2", {}, " h2 Namste react child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, " h1 Hello i am raja calling form child"),
    React.createElement("h2", {}, " h2 Hello i am raja calling form child"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
