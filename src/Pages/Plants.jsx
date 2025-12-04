import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import usePlants from '../Hooks/usePlants';
import PlantCard2 from '../Components/PlantCard2';
import LoadingSpinner from './LoadingSpinner';

const Plants = () => {
    const {plants} = usePlants()
    const [search, setSearch] = useState("");
    const [searchLoading, setSearchLoading] = useState(false);
    // const indoorPlants = plants;
    // console.log(plants);
    const [updatedPlants,setUpdatedPlants] = useState([]);
    console.log(updatedPlants);
    console.log(plants);
    useEffect(() => {
  if (plants) {
    setUpdatedPlants(plants);
  }
}, [plants]);
    
    
    const {loadingPlants} = usePlants()
     if(loadingPlants){
        return <LoadingSpinner></LoadingSpinner>
     }
     const handleLowToHigh = ()=>{
         const sortedPlants = [...updatedPlants].sort((a,b)=> a.price - b.price);
        setUpdatedPlants(sortedPlants);
     }
     const handleHighToLow = () =>{
         const sortedPlants = [...updatedPlants].sort((a,b)=> b.price - a.price);
         setUpdatedPlants(sortedPlants)
     }
     const handleHighRatings = ()=>{
        const sortedPlants = [...updatedPlants].sort((a,b)=> b.rating - a.rating);
        setUpdatedPlants(sortedPlants);
     }
     const handleSearch = (e) =>{
       
        const value = e.target.value;
        setSearch(value);
         setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 500);
       
   
        
     }
       const searchItem = search.trim().toLowerCase();
  const searchPlants = searchItem
    ? updatedPlants.filter((plant) => plant.plantName?.toLowerCase().includes(searchItem))
    : updatedPlants;
    
  
   
     
     
    return (
        <div>
            <h1 className="mt-10 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
        Discover Your <span className="text-green-600">Green</span> Companion
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed">
        Browse our carefully curated collection of indoor plants. Each plant is nurtured with care 
        and ready to bring life to your space. From low-
         <span className='ml-0 md:ml-32'>maintenance succulents to statement 
        foliage, find the perfect plant that matches your style and skill level.</span>
      </p>
        <div className='w-10/12 mx-auto grid grid-cols-10 my-20'>
            <div className='flex flex-col col-span-2  gap-5 px-4'>
                <label className="input">
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              placeholder="Search Plants..."
            />
          </label>
                <button
                className='btn btn-success'
                onClick={handleHighRatings}
                >High Ratings</button>
                <button 
                 className='btn btn-success'
                onClick={handleLowToHigh}
                >Low to High(Price)</button>
                <button
                 className='btn btn-success'
                onClick={handleHighToLow}
                >High to Low(Price)</button>

              
                
            </div>
            <div className='col-span-8'>
                
             {searchLoading? <div className="text-center">
                <div className="animate-spin rounded-full h-24 w-24 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                <h1 className="text-6xl font-bold text-gray-800 mt-4">Loading...</h1>
            </div>:<div className=' grid grid-cols-1 md:grid-cols-4 gap-3 mb-20'>
             
            {
               !searchLoading && searchPlants?searchPlants.map((plant)=><PlantCard2 key={plant.plantId} 
                plant={plant}
                ></PlantCard2>):updatedPlants.map((plant)=><PlantCard2 key={plant.plantId} 
                plant={plant}
                ></PlantCard2>)
            }

           
        </div>
           }
        
            </div>
            
           
        </div>
        </div>
    );
};

export default Plants;