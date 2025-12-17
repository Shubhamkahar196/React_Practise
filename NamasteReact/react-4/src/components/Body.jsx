import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local  state variable - super powerful variable
  const [listRes, SetListRes] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

 
  useEffect(() => {
    fetchData(); 
    
  },[]);

  const fetchData = async () => {
    const data = await axios.get("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.98340&lng=77.70600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/restaurants",
);

    const json = await data.data;



    console.log(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // Based on API response, cards are directly in data
    const restaurants = json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    SetListRes(restaurants);
    setFilteredRes(restaurants);

    // conditional rendering
    // if(listRes.length === 0){
    //   return <Shimmer/>
    // }
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
    return(
  <h1>Looks like you're offline !! Please check your internet connection</h1>
)

  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="ml-50 mb-5">
        <input
          className="border border-gray-300 p-2 rounded-lg 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="type something here.."
          value={searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          className="px-2 ml-3 mr-3 border bg-blue-400 rounded-lg hover:bg-zinc-500"
          onClick={() => {
            // filter the restaurant cards and update the UI
            // searchtext
            console.log(searchtext);
            const filterRes = listRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );

            setFilteredRes(filterRes);
          }}
        >
          Search
        </button>

        <button
          className="px-2 ml-3 mr-3 border bg-zinc-400 rounded-lg hover:bg-blue-500"
          onClick={() => {
            const filterList = listRes.filter((res) => res.info.avgRating > 4);
            setFilteredRes(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
         <Link  key={res.info.id} to={"/restaurant/" + res.info.id}>
         <RestaurantCard key={res.info.id} resData={res} />
         </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
