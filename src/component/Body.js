
import RestaurantCard from "./RestaurantCard";
import restroData from "../utils/mock_data";
import { useState, useEffect } from "react";

import {useState} from "react";
const Body = ()=>{
  const [allRestroData,setAllRestroData] = useState(restroData);

  console.log("Body rendered");

  useEffect(()=>{
    console.log("UseEffect called");
  },[]);



    return(
      <div className="body"> 
        <div className="filter">
          <button className="filter-btn" onClick={
            ()=>{
              const filteredRestroData = restroData.filter((res)=> res.rating>4 && res.delevryTime<30);
              setAllRestroData(filteredRestroData)
              console.log(filteredRestroData);
            }
            
          }>Top Restrorents</button>
      
        </div>
        <div className="Res-container">
          {allRestroData.map((res)=>{
            return(
              <RestaurantCard key={res.id} resImg={res.cloudinaryImageId} resName={res.name} rating={res.rating} delevryTime={res.delevryTime}/>
            )
          })}
        </div>
      </div>
    )
  }
  export default Body