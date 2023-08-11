
import RestaurantCard from "./RestaurantCard";

import restroData from "../utils/mock_data";
const Body = ()=>{
    
  // let conData = [
  //   {
  //   "countryId": 1,
  //   "name": "India",
  //   "isdCode": "91",
  //   "alpha2Code": "IN",
  //   "alpha3Code": "IND",
  //   "isoCurrencyCode": "INR",
  //   "flagImgUrl": "https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
  //   },
  //   {
  //   "countryId": 2,
  //   "name": "Afghanistan",
  //   "isdCode": "93",
  //   "alpha2Code": "AF",
  //   "alpha3Code": "AFG",
  //   "isoCurrencyCode": "AFN",
  //   "flagImgUrl": "https://b.zmtcdn.com/images/flags_z10/af.png?output-format=webp"
  //   }
  // ]
    return(
      <div className="body"> 
        <div className="filter">
          {/* <button className="filter-btn" onClick={
            ()=>{
              countryCode = countryCode.filter((res)=> res.isdCode<100);
              console.log(countryCode);
            }
          }>Top countryCode</button> */}
          
        </div>
        <div className="Res-container">
          {restroData.map((res)=>{
            return(
              <RestaurantCard resImg={res.cloudinaryImageId} resName={res.name} rating={res.rating} delevryTime={res.delevryTime}/>
            )
          })}
        </div>
      </div>
    )
  }
  export default Body