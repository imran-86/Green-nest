import axios from "axios";
import { useEffect, useState } from "react"
const usePlants = () =>{
    const [plants,setPlants] = useState([]);
    const [loadingPlants,setLoadingPlants] = useState(true);
    const [error,setError] = useState(null)
    useEffect(()=>{
        setLoadingPlants(true);
        setError(null);
        axios('../plants.json')
        .then((data) =>{
            console.log(data.data);
            
            setPlants(data.data);
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setLoadingPlants(false);
        })
    },[]);
    return {plants,loadingPlants,error}
}
export default usePlants;