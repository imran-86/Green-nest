import axios from "axios";
import { useEffect, useState } from "react"
const usePlants = () =>{
    const [plants,setPlants] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null)
    useEffect(()=>{
        setLoading(true);
        setError(null);
        axios('../plants.json')
        .then((data) =>{
            setPlants(data.data);
        })
        .catch((error)=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);
    return {plants,loading,error}
}
export default usePlants;