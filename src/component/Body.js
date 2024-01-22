import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
const Body = () => {
  const [allRestroData, setAllRestroData] = useState([]);
  console.log(allRestroData);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        // https://corsproxy.io/?
        "https://www.swiggy.com/mapi/homepage/getCards?lat=28.637278&lng=77.2259488"
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json)
  
      // Optional chaining.
      setAllRestroData(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      // You might want to handle the error or log it accordingly.
    }
  };
  

  if (allRestroData.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn-2"
          onClick={() => {
            const filteredRestroData = allRestroData.filter(
              (res) => res.info.avgRating > 4
            );
            setAllRestroData(filteredRestroData);
          }}
        >
          Top Restrorents
        </button>
        <button
          className="filter-btn-2"
          onClick={() => {
            const fastDelevry = allRestroData.filter(
              (res) =>
                res.info.sla.deliveryTime > 15 && res.info.sla.deliveryTime < 30
            );
            setAllRestroData(fastDelevry);
          }}
        >
          Fast delavry
        </button>
      </div>
      <div className="Res-container">
        {allRestroData.map((res) => {
          return (
            <RestaurantCard
              key={res.info.id}
              resImg={res?.info?.cloudinaryImageId}
              resName={res?.info?.name}
              rating={res?.info?.avgRating}
              delevryTime={res?.info?.sla?.deliveryTime}
              costForTwo={res?.info?.costForTwo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
