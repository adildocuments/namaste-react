import { FcRating } from "react-icons/fc";
import {IMAGE_URL} from '../utils/constants';
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Card = (props) => {
    const {restList} = props;
    const {cuisines, name, cloudinaryImageId, areaName, id, avgRating, sla:{deliveryTime} } = restList?.info;
    const {loggedInUser} = useContext(UserContext)
    return (
        <>
            <div className='w-[200px] border p-2 rounded-md m-2 h-full'>
                <div className="image-container">
                    <img src={IMAGE_URL+cloudinaryImageId} alt="" className="w-[100%] aspect-square"/>
                </div>
                <div className="basic-info">
                    <h3>{name}</h3>
                    <h3 className="rate-icon"><FcRating />&nbsp; 
                        <span className="rating">{avgRating}</span>
                        <span className="duration">&nbsp;. {deliveryTime} mins</span>
                    </h3>
                    <p className="cuisines">{cuisines.join(", ")}</p>
                    <p className='address'>{areaName}</p>
                    <p className='address'>{loggedInUser}</p>
                </div>
            </div>
            
        </>
    )
}

export const withPromotedCard = (Card) => {
    return (props) => {
        return(
            <>
                <label className=" absolute bg-black text-white p-1 m-3 rounded-md">Promoted</label>
                <Card {...props}/>
            </>
        )
    }
}
export default Card;