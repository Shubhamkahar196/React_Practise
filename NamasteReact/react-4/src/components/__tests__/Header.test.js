import Header from  '../Header'
import { Provider } from 'react-redux'
import appStore from '../../utils/appStore'
import { fireEvent, render,screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

it("Should load Header Components with a login button",()=>{
    render(
        <BrowserRouter>   // this is used for link which is present in Header
         <Provider store={appStore}>   //why Provider use here because provider is come from react-redux through useSelector
<Header/>
    </Provider>
        </BrowserRouter>
   
    );
     
    // 1st way -> good way to find button or text
    // const loginButton = screen.getByRole("button");

//   find specific things in button 
    const loginButton = screen.getByRole("button",{name: "Login"});


//    second way to find if fist not find then find like this
    // const loginButton = screen.getByText("Login");

    

    expect(loginButton).toBeInTheDocument();
    
})

test("Should load Header Components with a cart",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
 <Header/>
    </Provider>
    </BrowserRouter>
    )
    
    // string is same as in components 
    // we can also use regex and not needed to write same string 
    // const cartItem = screen.getByText("Cart-(0 items)")
    const cartItem = screen.getByText(/Cart/)

    expect(cartItem).toBeInTheDocument()
    
})

test("Should change Login Button to Logout on Click",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
 <Header/>
    </Provider>
    </BrowserRouter>
    )
      
    const loginButton = screen.getByRole("button",{name: "Login"})

    //  this check is onClick changes in button
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name: "Logout"});

    expect(logoutButton).toBeInTheDocument()
    
})