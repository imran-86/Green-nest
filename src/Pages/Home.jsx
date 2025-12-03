// import React, { use } from 'react';
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
    const firstEightPlants = plants?.slice(0, 8) || [];
    // const {loading} = use(AuthContext)
    // console.log(loading);
    
    if(loadingPlants){
        return <LoadingSpinner></LoadingSpinner>
    }
    // console.log(plants);
    // const location = useLocation();
   
    
    return (
        <div>
            <div className='w-10/12 mx-auto mt-10'>
             <Hero></Hero>
            </div>
         <div className='mt-10'>
            <h1 className=' font-bold text-center text-4xl '>Green Living</h1>
        <p className="mt-5 text-lg text-center text-gray-600">
  Curated indoor plants for every home. Easy care, air-purifying, and beautifully transformative.
</p>
         </div>
        <div className='mt-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5'>

            {
                firstEightPlants.map((plant)=><PlantCard key={plant.plantId} 
                plant={plant}
                ></PlantCard>)
            }
           
        </div>
         <Link to="/plants" className='btn btn-active btn-success mt-10  font-bold  block text-center mx-auto p-3 border w-fit'>
                See more
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