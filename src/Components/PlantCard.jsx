import React from 'react';
import star from '../assets/fi_1828884.png'
import { Link, useLocation } from 'react-router';
import { FaDollarSign } from 'react-icons/fa';
const PlantCard = ({plant}) => {
  const location = useLocation();
  console.log(location);
  
      const { 
        plantId,
        plantName, 
        price, 
        rating, 
        image, 
        
    } = plant;
    
    return (
        <div>
            <div
       className="cursor-pointer card bg-base-100 hover:scale-102 transition ease-in-out shadow-sm p-4">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold h-10">{plantName}</h2>

          <div className="card-actions flex mt-8 justify-between">
            <div className="badge  bg-gray-50 text-green-400">
              <p className='flex gap-1 items-center'><FaDollarSign></FaDollarSign>{price}</p>
            </div>
            <div>
              <Link to={`/${plantId}`}><button className="btn btn-active btn-success">View Details</button></Link>
            </div>
            <div className="badge  bg-amber-50 text-orange-600">
              <img src={star} alt="" />
              {rating}
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PlantCard;