import React, { use } from 'react';
import usePlants from '../Hooks/usePlants';
import PlantCard from '../Components/PlantCard';
import Hero from '../Components/Hero';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import LoadingSpinner from './LoadingSpinner';
import Experts from '../Components/Experts';
import { Link } from 'react-router';
import FeedbackList from '../Components/FeedbackList';
// import { useLocation } from 'react-router';

const Home = () => {
    const {plants,loadingPlants} = usePlants()
    const firstFourPlants = plants?.slice(0, 4) || [];
    // const {loading} = use(AuthContext)
    // console.log(loading);
    
    if(loadingPlants){
        return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(plants);
    // const location = useLocation();
   
    
    return (
        <div>
            <div className='w-9/12 mx-auto my-20'>
             <Hero></Hero>
            </div>
        <h1 className='font-semibold text-center text-5xl my-10'>Indoor Plants</h1><br />
        <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>

            {
                firstFourPlants.map((plant)=><PlantCard key={plant.plantId} 
                plant={plant}
                ></PlantCard>)
            }
           
        </div>
         <Link to="/plants" className='mt-10 bg-green-600 text-white font-bold rounded-4xl block text-center mx-auto p-3 border w-fit'>
                See more . . .
        </Link>

        <div>
           
            <Experts></Experts>
        </div>
        <div>
            <FeedbackList></FeedbackList>
        </div>
        <br /><br />
       </div>
    );
};

export default Home;