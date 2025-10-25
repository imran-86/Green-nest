// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import usePlants from '../Hooks/usePlants';
import { FaCartArrowDown, FaDollarSign, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';


const PlantCardDetails = () => {
    const {id} = useParams();
    const {plants} = usePlants();
    const details = plants ? plants.find((plant) => String(plant.plantId) === id) : undefined;
    
    if(!details){
        console.log("not find");
        return <LoadingSpinner></LoadingSpinner>
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
    
    const handleConsultation = (e) =>{
        e.preventDefault()
        toast.success("Successfully Booked ",plantName)
        e.target.reset()
    }
    
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
           <div className='flex flex-col justify-center items-center md:flex-none'>
              <p className='text-4xl font-semibold'>Price</p> <br />
              <div className='flex items-center'>
                <FaDollarSign  className='text-2xl'/>
               <p className='text-2xl font-bold'>{price}</p> 
              </div>
               
           </div>
           <div className='flex flex-col justify-center items-center md:flex-none'>
            <p className='text-4xl font-semibold'>Ratings</p> <br />
              <div className='flex items-center gap-4'>
                <FaStar   className='text-3xl text-yellow-400'/>
               <p className='text-2xl font-bold'>{rating}</p> 
              </div>
           </div>
           <div className='flex flex-col justify-center items-center md:flex-none'>
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
      <br />

      <div>
    <h1 className='text-2xl md:text-3xl font-bold text-center mt-16 md:mt-32 mb-8'>Book Consultation</h1>
    <div className="hero px-4">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl">
            <div className="card w-full max-w-md lg:max-w-2xl shadow-2xl bg-base-100">
                <div className="card-body p-6 md:p-8">
                    <form onSubmit={handleConsultation}>
                        <fieldset className="fieldset space-y-4 w-full">
                            <label className="label">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered w-full"
                                placeholder="Your Name"
                                required
                            />
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                required
                            />
                            <button className="btn bg-green-700 text-white mt-4 w-full">Book Now</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
      <br /><br />
    </div>
    );
};

export default PlantCardDetails;