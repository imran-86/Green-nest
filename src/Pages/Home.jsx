import React from 'react';
import usePlants from '../Hooks/usePlants';
import PlantCard from '../Components/PlantCard';

const Home = () => {
    const {plants} = usePlants()
    console.log(plants);
    
    return (
        <div className='w-11/12 mx-auto'>

            {/* {
                plants.map((plant)=><PlantCard key={plant.plantId} 
                plant={plant}
                ></PlantCard>)
            } */}
        </div>
    );
};

export default Home;