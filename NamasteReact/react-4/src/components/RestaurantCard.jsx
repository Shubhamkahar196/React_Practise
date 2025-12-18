import { RES_CARD_LOGO } from "../utils/constant"

const RestaurantCard = (props) =>{
const {resData} = props
       return(
        <div className="m-4 p-4 w-62.5 bg-zinc-400 rounded-2xl">
            <img className="rounded-2xl" src={RES_CARD_LOGO + resData.info.cloudinaryImageId}  alt="logo"/>
            <h3 className="font-bold py-3">{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
       )
}

// high order component -> is a component which enhace the function and return a some piece of jsx or function

export const WithPromtedLabel = (RestaurantCard)=>{
    return ()=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard