import RestaurantCard from "./RestaurantCard";
import restroData from "../utils/mock_data";
import { useState, useEffect } from "react";

import { useState, useEffect } from "react";
const Body = () => {
  const [allRestroData, setAllRestroData] = useState(restroData);

  // console.log("Body rendered");

  useEffect(() => {
    // console.log("UseEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants[0].cta.link);
    json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants.map(
      (res) => {
        console.log(res.cta.link);
      }
    )
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestroData = restroData.filter(
              (res) => res.rating > 4
            );
            setAllRestroData(filteredRestroData);
            console.log(filteredRestroData);
          }}
        >
          Top Restrorents
        </button>

        <button
          className="filter-btn-2"
          onClick={() => {
            const fastDelevry = restroData.filter(
              (res) => res.delevryTime > 15 && res.delevryTime < 30
            );
            setAllRestroData(fastDelevry);
            console.log(fastDelevry);
          }}
        >
          Fast delavry
        </button>
      </div>
      <div className="Res-container">
        {allRestroData.map((res) => {
          return (
            <RestaurantCard
              key={res.id}
              resImg={res.cloudinaryImageId}
              resName={res.name}
              rating={res.rating}
              delevryTime={res.delevryTime}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
