import React from 'react';
import usePlants from '../Hooks/usePlants';
import PlantCard from '../Components/PlantCard';
import Hero from '../Components/Hero';
// import { useLocation } from 'react-router';

const Home = () => {
    const {plants} = usePlants()
    // console.log(plants);
    // const location = useLocation();
   
    
    return (
        <div>
            <div className='w-9/12 mx-auto my-20'>
             <Hero></Hero>
            </div>
        <h1 className='font-semibold text-center text-5xl my-10'>Indoor Plants</h1><br />
        <div className='w-11/12 mx-auto grid grid-cols-3 gap-5'>

            {
                plants.map((plant)=><PlantCard key={plant.plantId} 
                plant={plant}
                ></PlantCard>)
            }
        </div>

        <div>
            <h1 className='font-semibold text-center text-5xl my-10'>Meet Our Green Expert</h1>
        </div>
       </div>
    );
};

export default Home;