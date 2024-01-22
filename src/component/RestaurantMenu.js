import React, { useEffect, useState } from "react";
import { ShimmerUi } from "./ShimmerUi";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      );
      const data = await response.json();
    //   console.log(data)
      setResInfo(
        data.cards[1].card.card.gridElements.infoWithStyle
      );

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(resInfo);
  const restaurant = resInfo.length > 0 ? resInfo[7].info : null;

  return resInfo.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="menu">
      <h1>{restaurant.name}</h1>
      <h2>
        Cuisines: {restaurant.cuisines.join(", ")} - Cost For Two:{" "}
        {restaurant.costForTwo}
      </h2>
      <ul>
        {restaurant.cuisines.map((cuisine, index) => (
          <li key={index}>{cuisine}</li>
        ))}
      </ul>
      <h2>Average Rating: {restaurant.avgRating}</h2>
    </div>

  );
};

export default RestaurantMenu;
