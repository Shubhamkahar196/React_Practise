import resObj from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react"
const Body = () =>{
// local  state variable - super powerful variable
  const [listRes, SetListRes] = useState(resObj);


  useEffect(()=>{
     fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.98340&lng=77.70600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  }

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