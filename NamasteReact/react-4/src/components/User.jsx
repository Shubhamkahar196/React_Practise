import {useState} from 'react'

// const User = (props)=>{
const User = ({name})=>{
    const [count,setCount] = useState(0);
    // const [count2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count Increase</button>


         {/* <h2>Name: {props.name}</h2> */}
         <h2>Name: {name}</h2>
         <h3>Location: Varanasi</h3>
         <h4>Contact: @shubham</h4>
        </div>
    )
}

export default User;