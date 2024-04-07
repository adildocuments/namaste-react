import {useParams} from 'react-router-dom';
import Shimmer from './Shimmer.js';
import useRestaurentCard from '../utils/useRestaurentCard.js';
import RestaurantCategory from './RestaurentCategory.js';
import { useState } from 'react';



const RestaurantMenu = () =>{
    console.log('restaurent menu render')
    const {restId} = useParams();
    const [showIndex, setShowIndex] = useState(0)
    const [isCollapse, setIsCollapse] = useState(true)
    console.log('is collapse', isCollapse)
    const menu = useRestaurentCard(restId);
    if (menu?.length === 0) {
        return (
            <Shimmer/>
            )
        }
    const {cards} = menu?.data?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR;
    const {name, cuisines} = menu?.data?.data?.cards[2]?.card?.card.info;

    const categories = cards.filter((c)=>{
        return c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
     console.log('collaps', isCollapse)
    return (
        <>
            <div className='text-center'>
                <h1 className='font-bold my-10 text-2xl'>{name}</h1>
                <p className='font-bold'>{cuisines.join(", ")}</p>
                {
                    categories.map((category, index)=>(
                        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
                        showItem={index === showIndex && isCollapse}
                        setShowIndexFn = {()=>setShowIndex(index)}
                        setIsCollapseFn = {(input)=>{console.log(input, 'input') 
                            setIsCollapse(input)}}
                        />
                    ))
                }
                
            </div>
        </>
    )
}

export default RestaurantMenu;