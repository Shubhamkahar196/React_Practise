import { useEffect, useState } from "react"
import { LOGO } from "../utils/constant"
import { Link } from "react-router-dom"
const Header = () =>{
      

    const [btnName, setBtnName] = useState("Login")
console.log("Header  called")

// if no dependency array => useEffect is called on every render
// if dependency array is empty = [] => useEffect is called on initial render(just once)
// if dependency array is [btnName] => called everytime btnName is updated
useEffect(()=>{
    console.log("useeffect called")
},[btnName])

    return (
        <div className="header">
         <div className="logo-container">
         <img  className="logo" src={LOGO} alt="logo"/>
         </div>

         <div className="nav-items">
   <ul>
    <li>Home</li>
    <li>
    <Link to='/about'>About us</Link>
    </li>

  
    <li>
        <Link to='/contact'>Contact Us</Link>
    </li>
    <li>Cart</li>
  

    <button className="login-btn" onClick={()=>{
        btnName ==="Login" ? setBtnName("Logout") : setBtnName("Login")
        // console.log(btnName)
    }}>{btnName}</button>
   </ul>
         </div>
        </div>
    )
}

export default Header