import resObj from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

const Body = () =>{
    return (
         
        <div className="body">
            <div className="search-container">
              <input className="search" placeholder="type something here.." />
              <button className="btn">Search</button>
            </div>

            <div className="res-container">
  
               {resObj.data.map((restaurant) => (
                   <RestaurantCard key={restaurant.id} resData={restaurant} />
               ))}


            </div>

        </div>
    )
}

export default Body