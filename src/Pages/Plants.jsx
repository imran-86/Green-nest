import React from 'react';
import { Link } from 'react-router';
import usePlants from '../Hooks/usePlants';
import PlantCard2 from '../Components/PlantCard2';
import LoadingSpinner from './LoadingSpinner';

const Plants = () => {
    const {plants,loading} = usePlants()
    // const indoorPlants = plants;
    // const {loading} = usePlants()
     if(loading){
        return <LoadingSpinner></LoadingSpinner>
     }
    return (
        <div>
            <h1 className='font-semibold text-center text-3xl md:text-5xl my-10'>Indoor Plants</h1><br />
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-20'>

            {
                plants.map((plant)=><PlantCard2 key={plant.plantId} 
                plant={plant}
                ></PlantCard2>)
            }
        </div>
        </div>
    );
};

export default Plants;