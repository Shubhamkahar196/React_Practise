import resObj from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
const Body = () =>{
// local  state variable - super powerful variable
  const [listRes, SetListRes] = useState(resObj);

    return (
         
        <div className="body">
            <div className="search-container">
              {/* <input className="search" placeholder="type something here.." /> */}
              <button className="filter-btn" onClick={ ()=>{
                const filterList = listRes.data.filter((res)=> res.avg_rating > 4)
                SetListRes({...listRes, data: filterList})
              }}>Top Rated Restaurant</button>
            </div>

            <div className="res-container">

               {listRes.data.map((restaurant) => (
                   <RestaurantCard key={restaurant.id} resData={restaurant} />
               ))}


            </div>

        </div>
    )
}

export default Body