import Card from './Card';
import {restaurants} from '../../utils/data.js';

const Body = () => {
    return (
        <>
            <div className='body'>
                <div className='filter-container'>
                    <button className='rated-btn'>Top Rated Restaurent</button>
                </div>
                <div className='cards-container'>
                    {
                        restaurants.map((restaurant)=>{
                            return <Card key={restaurant.info.id} restList = {restaurant}/>
                        })
                    }                   
                </div>
            </div>
        </>
    )
}

export default Body;