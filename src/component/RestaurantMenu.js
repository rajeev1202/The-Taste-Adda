import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CLOUDINARY_URL } from '../constants';
import ShimmerHome from './ShimmerHome';


const RestaurantMenu = () => {
    const { id } = useParams();
    const [restrauntMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestrauntMenu();
    }, []);

    const getRestrauntMenu = async () => {
        let restrMenu = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + id);
        let json = await restrMenu.json();
        setRestaurantMenu(json?.data);
        console.log("restaurant menu", json);
    }

    if(!restrauntMenu)
       return <ShimmerHome/>

    return (
        <div className="rest-menu-container">
            <div><img src={CLOUDINARY_URL + restrauntMenu?.cloudinaryImageId} alt={id} /></div>
            <ul>{ 
                    Object.values(restrauntMenu.menu.items).map((data) => <li key={data.id}>{data.name}</li> )
                }
                </ul>
        </div>
    )
}

export default RestaurantMenu;