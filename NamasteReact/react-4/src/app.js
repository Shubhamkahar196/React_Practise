import React, { lazy,Suspense, useContext ,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
// lazy loading -> import 

const Grocery = lazy(()=> import("./components/Grocery"));



const AppLayout = () => {

  const [userName, setUserName] = useState()
  
  return (
     <Provider store={appStore}>   //redux store
      <userContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
      {/* Header */}
      <Header />
      <Outlet/>
      </div>

      </userContext.Provider>
      </Provider>
    
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
         path: "/",
         element: <Body/>
        },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path: "/restaurant/:restid",    //making a dynamically route
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",    //making a dynamically route
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
