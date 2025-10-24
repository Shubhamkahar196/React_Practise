import {useEffect, useState} from 'react'
import axios from 'axios';
import Shimmer from './Shimmer';

const RestaurantMenu = () =>{
const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
        
    },[])  

    const fetchMenu = async () =>{
        const data = await axios.get("https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.98340&lng=77.70600&restaurantId=386420&catalog_qa=undefined&submitAction=ENTER%20Request%20Method%20GET")
        
        const json = await data.data;

        console.log(json);
        setRestInfo(json.data)
    }
       
    if(restInfo === null) return <Shimmer/>

    // const restaurantName = restInfo?.cards[0]?.card?.card?.info?.name || "Restaurant Name";

    const {name,cuisines,costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info

    // Extract menu items from the grouped cards
    // const menuItems = [];
    // const groupedCards = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    // groupedCards.forEach(group => {
    //     if (group?.card?.card?.itemCards) {
    //         group.card.card.itemCards.forEach(item => {
    //             menuItems.push(item.card.info.name);
    //         });
    //     }
    // });

    return  (
        <div>
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;