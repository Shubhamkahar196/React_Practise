import React from "react"

class UserClass extends React.Component{

    constructor(props){
        // this is important
        super(props);

        // use state in class components
        this.state ={
            count:0,
            count2:2
        }
    }

    render(){
        // destructuring
        const {count} = this.state;
        return (
        <div className="user-card">
            <h1>Count: {count}</h1>
          <button onClick={()=>{
            // never update state variables directly

            this.setState({
                count: this.state.count+1,
            })
          }}>Count Increase</button>
         <h2>Name: {this.props.name}</h2>
         <h3>Location: Varanasi</h3>
         <h4>Contact: @shubham</h4>
        </div>
    )
    }
}

export default UserClass