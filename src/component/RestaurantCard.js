
const RestaurantCard = (props)=>{
    return(
     
      <div className="restaurant-card">
        <div className="res-card-img">
          <img className="res-img" style={{width:"140px", height:"140px"}} src={props.resImg}/>
        </div>

        <span className="devider">_______________</span>
         <br />
         <br />
        <div className="res-card-info">
        <h4>{props.resName}</h4>  
        <h5>rating: {props.rating}</h5>
        <h6> Delavry time:{props.delevryTime}</h6>
  {/*      
        <h4>{props.cusien}</h4>
        <h4>{props.star}</h4>
        <h4>{props.deliveryTime}</h4> */}
        </div>  
      </div>
    )
  }

  
  export default RestaurantCard