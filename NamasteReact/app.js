import React from 'react'
import ReactDom from 'react-dom/client'
    const heading = React.createElement("h1", {}, "Hello world from React!");

    const root = ReactDom.createRoot(document.getElementById("root"));

    root.render(heading);
