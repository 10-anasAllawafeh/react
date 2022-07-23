import { useState,useEffect } from "react";
import axios from 'axios';

function Joker(url){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setLoading(true);
        axios.get(url)
        .then((response) =>{
            setData(response.data);
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(() =>{
            setLoading(false);
        })
    },[url]);

    const reset=()=>{
        setLoading(true);
        axios
        .get(url)
        .then((response) =>{
            setData(response.data);
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(() =>{
            setLoading(false);
        })
    }

    return {data,loading,reset};
};

export default Joker;

