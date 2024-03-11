import Card from './Card';
import {restaurants} from '../utils/data.js';
import {useEffect, useState} from 'react';
import {restaurants} from '../utils/data'
import axios from 'axios';
import { SWIGGY_URL } from '../utils/constants.js';
import Shimmer  from './Shimmer.js';


const Body = () => {
    //local state  react powerful variable
    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [filteredRes, setFilteredRes] = useState([])
    const [searchText, setSearchText] = useState("");

    fetchRestaurent = async () => {
        try {
            const res = await axios.get(SWIGGY_URL);
            setListOfRestaurent(res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRes(res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchRestaurent();
    }, [])

    // if(listOfRestaurent.length === 0) {
    //     return <Shimmer/>
    // }

    return (listOfRestaurent.length === 0) ? <Shimmer/>:
    (
        <>
            <div className='body'>
                <div className='filter-container'>
                    <div className='search-filter'>
                        <input type='text' placeholder='Search' onChange={(e)=>{
                            setSearchText(e.target.value)
                        }} className='search-input' value={searchText} />
                        <button className='btn-search' onClick={()=>{
                            const filterdList = listOfRestaurent.filter(res=>res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRes(filterdList)
                        }}>Search</button>
                    </div>
                    <div>
                    <button className='rated-btn' onClick={()=>{
                        const filterdList = listOfRestaurent.filter(res=>res.info.avgRating>=4)
                        setFilteredRes(filterdList)
                   }}>Top Rated Restaurent</button>
                    </div>
                </div>
                <div className='cards-container'>
                    {
                        filteredRes.map((restaurant)=>{
                            return <Card key={restaurant.info.id} restList = {restaurant}/>
                        })
                    }                   
                </div>
            </div>
        </>
    )
}

export default Body;