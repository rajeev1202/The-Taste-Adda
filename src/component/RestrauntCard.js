import {CLOUDINARY_URL} from '../constants';

const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return (
        <div className="restro-card">
                <img src= {CLOUDINARY_URL + cloudinaryImageId} alt="restaurant-image"/>
                <p>{name}</p>
                <p>{cuisines.join(', ')}</p>
                <p>{avgRating} stars</p>
            </div>
    )
}

export default RestrauntCard;