import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await axios.get(MENU_ITEM + resId);
    const json = data.data;
    console.log("FULL API:", json);
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  // ✅ Dynamically find restaurant info card
  const infoCard = resInfo.cards.find(
    (card) => card.card?.card?.info
  );
  const { name, cuisines, costForTwoMessage } = infoCard.card.card.info;

  // ✅ Dynamically find menu itemCards — not recommended items
  const regularCards =
    resInfo.cards.find((c) => c.groupedCard)?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards;

  const menuCard = regularCards.find(
    (c) => c.card?.card?.itemCards // ✅ Only menu items
  );

  const itemCards = menuCard?.card?.card?.itemCards || [];

  console.log("MENU ITEMS:", itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <p>{costForTwoMessage}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_ITEM } from "../utils/constant";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const { resId } = useParams();

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     try {
//       const { data } = await axios.get(MENU_ITEM + resId);
//       console.log("FULL API:", data);
//       setResInfo(data?.data);
//     } catch (error) {
//       console.error("API FETCH ERROR:", error);
//     }
//   };

//   if (!resInfo) return <Shimmer />;

//   // ✅ Find Restaurant Info dynamically
//   const restaurantInfoCard = resInfo.cards?.find(
//     (card) =>
//       card.card?.card?.["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
//   );

//   const { name, cuisines, costForTwoMessage } =
//     restaurantInfoCard?.card?.card?.info || {};

//   // ✅ Find REGULAR group (all menu categories)
//   const regularGroupCard = resInfo.cards?.find((card) => card.groupedCard)
    // ?.groupedCard?.cardGroupMap?.REGULAR;

//   // ✅ Collect all menu items across all categories
//   const itemCards = regularGroupCard?.cards
//     ?.flatMap((cat) => {
//       const type = cat.card?.card?.["@type"];
//       // Only ItemCategory or NestedItemCategory contains menu items
//       if (
//         type ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
//         type ===
//           "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
//       ) {
//         if (cat.card.card.itemCards) return cat.card.card.itemCards;
//         if (cat.card.card.categories)
//           return cat.card.card.categories.flatMap((c) => c.itemCards || []);
//       }
//       return [];
//     }) || [];

//   console.log("MENU ITEMS:", itemCards);

//   return (
//     <div>
//       <h1>{name || "Restaurant Name Not Found"}</h1>
//       <h3>{cuisines?.join(", ") || "Cuisines Not Found"}</h3>
//       <p>{costForTwoMessage || ""}</p>

//       <h2>Menu</h2>
//       <ul>
//         {itemCards.length > 0 ? (
//           itemCards.map((item) => (
//             <li key={item.card.info.id}>
//               {item.card.info.name} - ₹
//               {(item.card.info.price || item.card.info.defaultPrice) / 100}
//             </li>
//           ))
//         ) : (
//           <p>No menu items available</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

