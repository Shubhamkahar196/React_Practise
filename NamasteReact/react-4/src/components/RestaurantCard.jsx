import { RES_CARD_LOGO } from "../utils/constant"

const RestaurantCard = (props) =>{
const {resData} = props
       return(
        <div className="res-card">
            <img className="logo" src={RES_CARD_LOGO + resData.info.cloudinaryImageId}  alt="logo"/>
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
       )
}

export default RestaurantCard