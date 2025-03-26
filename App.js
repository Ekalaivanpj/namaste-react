import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "i am heading from react"
// );

const jsxHeading = (
  <hi id="heading" tabIndex="5">
    I am a jsx heading
  </hi>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
