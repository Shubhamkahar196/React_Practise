import { RES_CARD_LOGO } from "../utils/constant"

const RestaurantCard = (props) =>{
const {resData} = props
       return(
        <div className="res-card">
            <img className="logo" src={RES_CARD_LOGO}  alt="logo"/>
            <h3>{resData.name}</h3>
            <h3>{resData.cuisine_tags.join(", ")}</h3>
            <h4>{resData.avg_rating} stars</h4>
            <h4>{resData.service_data.sla_string}</h4>
        </div>
       )
}

export default RestaurantCard