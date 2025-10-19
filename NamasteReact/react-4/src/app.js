import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
/*
header
-logo 
-nav menu

body
-search
-restaurantcontainer
-restaurnatcard 
-> img
-> name of res, star rating, cuising , delery etc

-footer
-copyright
-links
-address
-contact
*/



const resObj = {
   
  "data": [
    {
      "id": "RES-001A",
      "name": "Spice Fusion Hub",
      "city": "Bengaluru",
      "locality": "Koramangala",
      "cuisine_tags": ["Indian", "Chinese", "Desserts"],
      "avg_rating": 4.2,
      "total_ratings": 5678,
      "cost_for_two": 550,
      "is_newly_listed": false,
      "is_veg_only": false,
      "service_data": {
        "delivery_time_min": 35,
        "delivery_time_max": 45,
        "delivery_fee": 30,
        "is_open": true,
        "sla_string": "40 MINS"
      },
      "offers": [
        {"type": "PERCENTAGE", "value": 20, "description": "20% OFF up to ₹100"},
        {"type": "FLAT_DISCOUNT", "value": 50, "description": "Flat ₹50 off on orders above ₹299"}
      ],
      "menu_preview": [
        {"item_name": "Chicken Tikka Masala", "price": 320},
        {"item_name": "Veg Fried Rice", "price": 180},
        {"item_name": "Gulab Jamun (2 pcs)", "price": 90}
      ]
    },
    {
      "id": "RES-002B",
      "name": "The Vegan Bowl",
      "city": "Mumbai",
      "locality": "Bandra West",
      "cuisine_tags": ["Salads", "Healthy Food", "Smoothies"],
      "avg_rating": 4.6,
      "total_ratings": 1245,
      "cost_for_two": 700,
      "is_newly_listed": true,
      "is_veg_only": true,
      "service_data": {
        "delivery_time_min": 20,
        "delivery_time_max": 30,
        "delivery_fee": 0,
        "is_open": true,
        "sla_string": "25 MINS (Free Delivery)"
      },
      "offers": [
        {"type": "FREE_ITEM", "value": 1, "description": "Free Drink on all orders"}
      ],
      "menu_preview": [
        {"item_name": "Quinoa Salad", "price": 350},
        {"item_name": "Avocado Toast", "price": 280},
        {"item_name": "Berry Smoothie", "price": 199}
      ]
    }
  ]
}



const RestaurantCard = (props) =>{
const {resData} = props
       return(
        <div className="res-card">
            <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/7/17/5bf2997a-1b0b-433e-bb83-6569661fcf72_67ea33a1-4395-401a-9a28-a20383a25d05.jpg_compressed"  alt="logo"/>
            <h3>{resData.name}</h3>
            <h3>{resData.cuisine_tags}</h3>

<h4>{resData.avg_rating}</h4>
<h4>{resData.service_data}</h4>
        </div>
       )
}



const Body = () =>{
    return (
         
        <div className="body">
            <div className="search-container">
              <input className="search" placeholder="type something here.." />
              <button className="btn">Search</button>
            </div>

            <div className="res-container">
               {/* restaurant Card */}
               {/* <RestaurantCard resName="Meghana food" cuisine="Biryani"/> */}
               <RestaurantCard resData={resObj.data}/>
               {/* <RestaurantCard resName= "KFC" cuisine="Burger,fast food"/> */}
               
            </div>

        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className='app'>
         {/* Header */}
         <Header/>
         {/* body */}
         <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

