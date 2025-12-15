import React from "react"

class UserClass extends React.Component{

    constructor(props){
        // this is important
        super(props);

        // use state in class components
        // this.state ={
        //     count:0,
        //     count2:2
        // }
        this.state = {
            userInfo: "Dummay",
            location: "Default",
            avatar_url: "default"
        }
          
    } 
//  api call ke liye
   async componentDidMount(){
       const data = await fetch("https://api.github.com/users/shubhamkahar196");
       const json = await data.json();


       this.setState({
        userInfo: json,
       })
       console.log(json);
    }

    render(){

        // console.log("Child render")
        // destructuring
        // const {count} = this.state;

        // return (
        // <div className="user-card">
        //     <h1>Count: {count}</h1>
        //   <button onClick={()=>{
            // never update state variables directly

        //     this.setState({
        //         count: this.state.count+1,
        //     })
        //   }}>Count Increase</button>


    //      <h2>Name: {name}</h2>
    //      <h3>Location: Varanasi</h3>
    //      <h4>Contact: @shubham</h4>
    //     </div>
    // )

        const {name,location,avatar_url} = this.state.userInfo;
    return (


        <div className="user-card">
            <img src={avatar_url} alt="" srcset="" />
<h2>Name: {name}</h2>

<h3> Location: {location}</h3>
<h3> Contact: shubhame</h3>
     </div>
    )
    }
}

export default UserClass