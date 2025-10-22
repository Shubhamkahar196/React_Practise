import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";

const Body = () => {
  // local  state variable - super powerful variable
  const [listRes, SetListRes] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.98340&lng=77.70600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          className="search"
          placeholder="type something here.."
          value={searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filterList = listRes.filter((res) => res.info.avgRating > 4);
            setFilteredRes(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
