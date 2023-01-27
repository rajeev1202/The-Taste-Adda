import React, { useState } from 'react';
import RestrauntCard from './RestrauntCard';
import { RESTAURANT_LIST } from '../constants';
import { filterItems } from '../utility';

const Body = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const [filteredList, setFilteredList] = useState(RESTAURANT_LIST);
    return (
        <div className="body-container">
            <div className="mt-2">
                <input placeholder="Search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
                <button onClick={() => {
                    setFilteredList(filterItems(searchTxt, RESTAURANT_LIST))
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