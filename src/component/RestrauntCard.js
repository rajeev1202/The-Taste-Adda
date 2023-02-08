import {CLOUDINARY_URL} from '../constants';
import { useNavigate } from 'react-router-dom';

const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId, id}) => {
    let navigate = useNavigate();
    const routerChange = () => {
        let path = '/restaurant/'+ id
        navigate(path)
    }

    return (
        <div className="restro-card" onClick={routerChange}>
                <img src= {CLOUDINARY_URL + cloudinaryImageId} alt="restaurant-image"/>
                <p>{name}</p>
                <p>{cuisines.join(', ')}</p>
                <p>{avgRating} stars</p>
            </div>
    )
}

export default RestrauntCard;