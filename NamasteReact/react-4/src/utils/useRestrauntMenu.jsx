import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constant";
const useRestrauntMenu = (resId)=> {
    const[resInfo, setResInfo] = useState(null)
//  fetch data

useEffect(()=>{
    fetchData();
})

const fetchData = async ()=>{
    const data = await fetch(MENU_ITEM+resId);
    const json = await data.json;
    console.log(json);
    setResInfo(json.data);
} 

return resInfo;
}

export default useRestrauntMenu