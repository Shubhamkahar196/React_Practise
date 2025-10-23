import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";



const AppLayout = () =>{
    return (
        <div className='app'>
         {/* Header */}
         <Header/>
         {/* body */}
         <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <AboutUs/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

