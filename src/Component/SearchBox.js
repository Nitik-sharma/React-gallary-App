import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function SearchBox({setImage}) {
    const [searchInput,setSearchInput]=useState("nature");
    const [prevSearch,setPrevSearch]=useState("");
    
   
useEffect=(()=>{
    fetchImage();
},[]);
    

    const fetchImage=()=>{
     if(prevSearch===searchInput)return
      
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                "query":searchInput ||"nature"
            },
           headers:{
            Authorization:"Client-ID AeqnfUgApKZNJXZQPp4ceyOEv1S07AJXotVrQ0UL7x4"
            }
        }).then((res)=>{
            setImage(res.data.results)
            setPrevSearch(searchInput);
        })
        .catch((error)=>console.log(error))
       
       
    }
  return (
    <div className='btn'>
       <div className='inputBox'>
       <input type='text' placeholder='Search Image ....' value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className='input'/>
       </div>
        <div className='btnBox'>
        <button onClick={fetchImage} className='button'>Search</button>
        </div>
    </div>
  )
}

export default SearchBox;