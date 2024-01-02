import RestaurantCard from "./RestaurantCard";
// import restroData from "../utils/mock_data";
import { useState, useEffect } from "react";

const Body = () => {
  const [allRestroData, setAllRestroData] = useState([]);
  // const [allData, setAllData] = useState([]);
  console.log(allRestroData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // https://corsproxy.io/?
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.637278&lng=77.2259488"
    );
    const json = await data.json();

    console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants)
    // Optional chaning.
    setAllRestroData(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // setAllData(
    //   json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
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
        {/* <button
          className="filter-btn-2"
          onClick={() => {
            setAllRestroData(allData);
          }}
        >
          All
        </button> */}
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
