import Card, { withPromotedCard } from "./Card.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { SWIGGY_URL } from "../utils/constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnine.js";

export const Body = () => {
  //local state  react powerful variable
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [scrollPosition, setScrollPosition] = useState(0);

  fetchRestaurent = async () => {
    try {
      const res = await axios.get(SWIGGY_URL);
      setListOfRestaurent(
        res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRes(
        res.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };
  // const handleScroll = (event) => {
  //     const currentPosition = event.target.scrollTop;
  //     setScrollPosition(currentPosition);
  // };
  useEffect(() => {
    fetchRestaurent();
  }, []);

  // if(listOfRestaurent.length === 0) {
  //     return <Shimmer/>
  // }
  const onlineStatus = useStatusOnline();
  if (onlineStatus === false) {
    return <h1>Please check your internet connection!</h1>;
  }

  const CardWithPromoted = withPromotedCard(Card);
  return listOfRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mx-auto w-[90%]">
        <div className="flex items-center">
          <div className="p-2 m-2">
            <input
              type="text"
              data-testid="searchInput"
              placeholder="Search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="border border-solid black-border p-2 rounded-md"
              value={searchText}
            />
            <button
              className="ml-2 bg-pink-200 border p-2 rounded-md"
              onClick={() => {
                const filterdList = listOfRestaurent?.filter((res) =>
                  res.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRes(filterdList);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <button
              className="border border-solid black-border p-2 rounded-md bg-pink-200 "
              onClick={() => {
                const filterdList = listOfRestaurent?.filter(
                  (res) => res.info.avgRating >= 4
                );
                setFilteredRes(filterdList);
              }}
            >
              Top Rated Restaurent
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {filteredRes?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant-menu/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {false ? (
                  <CardWithPromoted restList={restaurant} />
                ) : (
                  <Card restList={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
