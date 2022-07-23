import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

function GetId()
{
    const[id,setId]=useState();

    // const idHandle = useCallback((e)=> {
    //     setId(e.target.value);
    //     console.log(id);
    // },[id])

    const idHandle=(e)=>{
        setId(e.target.value);
        console.log(id);
    }
    useEffect(()=>{

    },[])




    return(
        <div>
            <form action="">
            <label htmlFor="id">User Id</label>
            <input type="text" id='id' name='id' onChange={idHandle}/>
            <button type='submit'>check</button>
            </form>
        </div>
    )
}
export default GetId;