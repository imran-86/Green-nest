import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import usePlants from '../Hooks/usePlants';
import star from '../assets/fi_1828884.png'
import { FaCartArrowDown, FaDollarSign, FaStar } from 'react-icons/fa';

const PlantCardDetails = () => {
    const {id} = useParams();
    const {plants} = usePlants();
    console.log(plants);
    const details = plants ? plants.find((plant) => String(plant.plantId) === id) : undefined;
    console.log(details);
    if(!details){
        console.log("not find");
        return;
    }
    const {
        plantName,
       price,
       rating,
       availableStock,
       description,
       image,
      providerName

    }=details;
    

    
    return (
        <div className="max-w-11/12 mx-auto w-full pt-4 md:pt-8 lg:pt-16 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 border-b-2 border-gray-400 pb-8">
        <figure className="flex justify-center lg:justify-start">
          <img className="rounded-2xl md:rounded-4xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto" src={image} alt="App" />
        </figure>
        <div className="flex-1 text-center lg:text-left">
          <h6 className="text-left text-2xl  md:text-5xl font-bold pb-2">{plantName}</h6>
          <p className="border-b-2 border-gray-400 w-full text-gray-500 pb-3">
            Provided by{" "}
            <span className="text-purple-700 font-bold">{providerName}</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
           <div>
              <p className='text-4xl font-semibold'>Price</p> <br />
              <div className='flex items-center'>
                <FaDollarSign  className='text-2xl'/>
               <p className='text-2xl font-bold'>{price}</p> 
              </div>
               
           </div>
           <div>
            <p className='text-4xl font-semibold'>Ratings</p> <br />
              <div className='flex items-center gap-4'>
                <FaStar   className='text-3xl text-yellow-400'/>
               <p className='text-2xl font-bold'>{rating}</p> 
              </div>
           </div>
           <div>
              <p className='text-4xl font-semibold'>Available Stock</p> <br />
              <div className='flex items-center gap-4'>
                <FaCartArrowDown  className='text-3xl text-gray-500'/>
               <p className='text-2xl font-bold'>{availableStock}</p> 
              </div>
           </div>
          </div>
          
        </div>
      </div>
      <br />
      <div>
        <h1 className="text-2xl font-bold">Description</h1>
        <br />
        <p className="text-gray-500 leading-loose">{description}</p>
      </div>
    </div>
    );
};

export default PlantCardDetails;