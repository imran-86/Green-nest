import React from 'react';
import { Link } from 'react-router';
import usePlants from '../Hooks/usePlants';
import PlantCard2 from '../Components/PlantCard2';

const Plants = () => {
    const {plants} = usePlants()
    // const indoorPlants = plants;
    return (
        <div>
            <h1 className='font-semibold text-center text-5xl my-10'>Indoor Plants</h1><br />
        <div className='w-11/12 mx-auto grid grid-cols-3 gap-5'>

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