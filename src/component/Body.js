import React, { useState, useEffect } from 'react';
import RestrauntCard from './RestrauntCard';
import { RESTAURANT_LIST } from '../constants';
import { filterItems } from '../utility';
import ShimmerHome from './ShimmerHome';

const Body = () => {
    const [allRestraunt, setAllRestaurant] = useState(null)
    const [searchTxt, setSearchTxt] = useState("");
    const [filteredList, setFilteredList] = useState(null);

    useEffect(() => {
        getRestaurantData()
    },[])

    async function getRestaurantData(){
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        let jsonRes = await data.json()
        console.log("res data ",jsonRes)
        setAllRestaurant(jsonRes?.data?.cards?.[2]?.data?.data?.cards);
        setFilteredList(jsonRes?.data?.cards?.[2]?.data?.data?.cards);
    }
    if(!allRestraunt) return <ShimmerHome/>

    if(allRestraunt && !filteredList) return <h1>No result found for this search</h1>

    return (
        <div className="body-container">
            <div className="mt-2">
                <input placeholder="Search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
                <button onClick={() => {
                    setFilteredList(filterItems(searchTxt, allRestraunt))
                }}>Search</button>
            </div>

            <div className="restraunt-card-wrapper">{
                filteredList.map((restaurant) => <RestrauntCard key={restaurant.data.id} {...restaurant.data} />)
            }

            </div>
        </div>
    )
}

export default Body;