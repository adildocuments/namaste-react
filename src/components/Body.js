import Card from './Card';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { SWIGGY_URL } from '../utils/constants.js';
import Shimmer  from './Shimmer';
import { Link } from 'react-router-dom';
import useStatusOnline from '../utils/useStatusOnine.js';


const Body = () => {
    //local state  react powerful variable
    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [filteredRes, setFilteredRes] = useState([])
    const [searchText, setSearchText] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);

    fetchRestaurent = async () => {
        try {
            const res = await axios.get(SWIGGY_URL);
            console.log(res);
            setListOfRestaurent(res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRes(res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }catch(error){
            console.log(error);
        }
    }
    const handleScroll = (event) => {
        const currentPosition = event.target.scrollTop;
        setScrollPosition(currentPosition);
    }
    useEffect(()=>{
        console.log('body use effect')
        fetchRestaurent();
    }, [])

    console.log('body')
    // if(listOfRestaurent.length === 0) {
    //     return <Shimmer/>
    // }
    const onlineStatus = useStatusOnline();
    if(onlineStatus === false) {
        return <h1>Please check your internet connection!</h1>
    }

    return (listOfRestaurent?.length === 0) ? <Shimmer/>:
    (
        <>
            <div className='body'>
                <div className='filter-container'>
                    <div className='search-filter'>
                        <input type='text' placeholder='Search' onChange={(e)=>{
                            setSearchText(e.target.value)
                        }} className='search-input' value={searchText} />
                        <button className='btn-search' onClick={()=>{
                            const filterdList = listOfRestaurent?.filter(res=>res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRes(filterdList)
                        }}>Search</button>
                    </div>
                    <div>
                    <button className='rated-btn' onClick={()=>{
                        const filterdList = listOfRestaurent?.filter(res=>res.info.avgRating>=4)
                        setFilteredRes(filterdList)
                   }}>Top Rated Restaurent</button>
                    </div>
                </div>
                <div className='cards-container'>
                    {
                        filteredRes?.map((restaurant)=>{
                            return <Link to={"/restaurant-menu/"+restaurant.info.id} key={restaurant.info.id}> <Card  restList = {restaurant}/></Link>
                        })
                    }                   
                </div>
            </div>
        </>
    )
}

export default Body;