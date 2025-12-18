// import { useEffect, useState } from "react";

// import axios from "axios";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// // import { MENU_ITEM } from "../utils/constant";
// import useRestrauntMenu from "../utils/useRestrauntMenu";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const { resId } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await axios.get(MENU_ITEM + resId);
  //   const json = data.data;
  //   console.log("FULL API:", json);
  //   setResInfo(json.data);
  // };

  // creating custom hook
  // const restInfo = useRestrauntMenu(resId)

  // if (!resInfo) return <Shimmer />;

//   // ✅ Dynamically find restaurant info card
//   const infoCard = resInfo.cards.find(
//     (card) => card.card?.card?.info
//   );
//   const { name, cuisines, costForTwoMessage } = infoCard.card.card.info;

//   // ✅ Dynamically find menu itemCards — not recommended items
//   const regularCards =
//     resInfo.cards.find((c) => c.groupedCard)?.groupedCard
//       ?.cardGroupMap?.REGULAR?.cards;

//   const menuCard = regularCards.find(
//     (c) => c.card?.card?.itemCards // ✅ Only menu items
//   );

//   const itemCards = menuCard?.card?.card?.itemCards || [];

//   console.log("MENU ITEMS:", itemCards);

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h3>{cuisines?.join(", ")}</h3>
//       <p>{costForTwoMessage}</p>

//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹
//             {(item.card.info.price || item.card.info.defaultPrice) / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;



import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import useRestrauntMenu from '../utils/useRestrauntMenu'
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = 'Dummy Data';

  const resInfo = useRestrauntMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;


