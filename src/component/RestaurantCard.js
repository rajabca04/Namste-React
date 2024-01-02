
const RestaurantCard = (props)=>{
    return(
     
      <div className="restaurant-card">
        <div className="res-card-img">
          <img className="res-img" style={{width:"140px", height:"140px"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props?.resImg}/>
        </div>

        <span className="devider">_______________</span>
         <br/>
        <div className="res-card-info">
        <h2>{props?.resName}</h2>  
        <h4>rating: {props?.rating} ⭐ </h4>
        
        
        <h6> Delavry time:{props.delevryTime} Min.</h6>
        <h6> {props?.costForTwo}</h6>
  {/*      
        <h4>{props.cusien}</h4>
        
        <h4>{props.star}</h4>
        <h4>{props.deliveryTime}</h4> 
  */}
        </div>  
      </div>
    )
  }

  
  export default RestaurantCard