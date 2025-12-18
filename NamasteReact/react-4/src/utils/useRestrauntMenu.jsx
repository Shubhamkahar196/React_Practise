import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constant";
import axios from "axios";

const useRestrauntMenu = (resId)=> {
    const[resInfo, setResInfo] = useState(null)
//  fetch data

useEffect(()=>{
    fetchData();
})

const fetchData = async ()=>{
    try {
        const data = await axios.get(MENU_ITEM+resId);
        const json = data.data;
        console.log(json);
        setResInfo(json.data);
    } catch (error) {
        console.error("Error fetching restaurant menu:", error);
    }
}

return resInfo;
}

export default useRestrauntMenu
