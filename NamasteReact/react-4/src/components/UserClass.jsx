import React from "react"

class UserClass extends React.Component{

    constructor(props){
        // this is important
        super(props);

        console.log(props)
    }

    render(){
        return (
        <div className="user-card">
         <h2>Name: {this.props.name}</h2>
         <h3>Location: Varanasi</h3>
         <h4>Contact: @shubham</h4>
        </div>
    )
    }
}

export default UserClass