import { FcRating } from "react-icons/fc";
import {IMAGE_URL} from '../utils/constants';
const Card = (props) => {
    const {restList} = props;
    const {cuisines, name, cloudinaryImageId, areaName, id, avgRating, sla:{deliveryTime} } = restList?.info;
    return (
        <>
            <div className='card'>
                <div className="image-container">
                    <img src={IMAGE_URL+cloudinaryImageId} alt="" className="card-img"/>
                </div>
                <div className="basic-info">
                    <h3>{name}</h3>
                    <h3 className="rate-icon"><FcRating />&nbsp; 
                        <span className="rating">{avgRating}</span>
                        <span className="duration">&nbsp;. {deliveryTime} mins</span>
                    </h3>
                    <p className="cuisines">{cuisines.join(", ")}</p>
                    <p className='address'>{areaName}</p>
                </div>
            </div>
            
        </>
    )
}
export default Card;