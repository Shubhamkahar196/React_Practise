import React from 'react'
import ReactDom from 'react-dom/client'
    

// React.createElement => object => HTMLElement(render)
// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Namaste React"
// ) 
// // console.log(heading)

// JSX - is not HTML in js , we call it HTML-like syntax or XML- like syntax 

// const jsxHeading = <h1 id='heading'> Namaste React using JSX</h1>

// console.log(jsxHeading)

// React component - two way to create component
//1 - class based component - old
//2 - functional component - NEW

// React functional component is now javascript functional (same as js function)
// and return jsx

const Title = () =>(
    <h1 className='head' tabIndex="5"> Namaste react using jsx</h1>
)

const HeadingComponent = () =>{
    <div id='container'>
        {Title()}
        <Title/>
         <h1 className='heading'> Namaste react using jsx</h1>
    </div>
    
}

// const HeadingComponent2 = ()=>{
//     <h1 className='heading'> Namste React function Component2</h1>
// }

// both function are same
const root = ReactDom.createRoot(document.getElementById("root"))

// render functional components
root.render(<HeadingComponent/>)
// root.render(jsxHeading);
