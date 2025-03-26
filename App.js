import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "i am heading from react"
// );

const heading = <h1>I am a jsx heading</h1>; //jsx element or react element

//react function component
const ReactFuncComponent = () => {
  return <h1>React functional component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactFuncComponent />);
