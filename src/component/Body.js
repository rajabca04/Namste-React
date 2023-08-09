
import RestaurantCard from "./RestaurantCard"

import countryCode from "../utils/mock_data"
const Body = ()=>{
    
    return(
      <div className="body"> 
        <div className="Search">Search</div>
        <div className="Res-container">
          {
            countryCode.map((country)=>{
              return <RestaurantCard key={country.countryId} resName={country.name} resImg={country.flagImgUrl} />
              
            })
            
  }
          {/* <RestaurantCard resName="raja's food" cusien="vagitable,indian" star="4.9" deliveryTime="30 min"/> */}
         
          
        </div>
      </div>
    )
  }
  export default Body