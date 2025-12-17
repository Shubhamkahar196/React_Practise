import { useEffect, useState } from "react"
import { LOGO } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () =>{
      

    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();
console.log("Header  called")

// if no dependency array => useEffect is called on every render
// if dependency array is empty = [] => useEffect is called on initial render(just once)
// if dependency array is [btnName] => called everytime btnName is updated
useEffect(()=>{
    console.log("useeffect called")
},[btnName])

    return (
        <div className="flex justify-between px-10">
         <div className="logo-container">
         <img  className="w-35" src={LOGO} alt="logo"/>
         </div>

         <div className="flex items-center ">
   <ul className="flex gap-5 p-4 m-4 ">
    <li>OnlineStatus : {onlineStatus ? "🔵" : "😡"}</li>
    <li className="hover:bg-gray-500 hover:text-xl font-semibold rounded-xl  ">
        <Link to='/'>Home</Link>
    </li>
    <li className="hover:bg-gray-500 hover:text-xl font-semibold rounded-xl  ">
    <Link to='/about'>About us</Link>
    </li>

  
    <li className="hover:bg-gray-500 hover:text-xl font-semibold rounded-xl  ">
        <Link to='/contact'>Contact Us</Link>
    </li>
    <li className="hover:bg-gray-500 hover:text-xl font-semibold rounded-xl  ">
        <Link to='/grocery'>Grocery</Link>
    </li>
    <li className="hover:bg-gray-500 hover:text-xl font-semibold rounded-xl  ">Cart</li>
  

    <button className="hover:bg-gray-500 hover:text-xl font-semibold rounded-xl  "onClick={()=>{
        btnName ==="Login" ? setBtnName("Logout") : setBtnName("Login")
        // console.log(btnName)
    }}>{btnName}</button>
   </ul>
         </div>
        </div>
    )
}

export default Header