import React from 'react'
import  User from './User'
import UserClass from './UserClass'

class AboutUs extends React.Component{
  constructor(props){
    super(props);
     
    console.log("Parent class")
    
  }
  //  componentDidMount is use for api call just like useEffect
  componentDidMount(){
    console.log("Parent mount")
  }

  render(){
    console.log("parent render")
    return (
    <div>
        <h1>About</h1>
        <h2>Learing About us</h2>
        <User name={"Shubham(functional"}/>
        <UserClass name={"Shubham(class)"}/>
    </div>
  )
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         <h2>Learing About us</h2>
//         <User name={"Shubham(functional"}/>
//         <UserClass name={"Shubham(class)"}/>
//     </div>
//   )
// }

export default AboutUs