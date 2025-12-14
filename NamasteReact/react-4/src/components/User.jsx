
const User = (props)=>{
    return (
        <div className="user-card">
         <h2>Name: {props.name}</h2>
         <h3>Location: Varanasi</h3>
         <h4>Contact: @shubham</h4>
        </div>
    )
}

export default User;