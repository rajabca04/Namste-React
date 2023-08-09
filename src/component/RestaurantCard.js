



const RestaurantCard = (props)=>{
    return(
      <div className="restaurant-card">
        <div className="res-card-img">
          <img className="res-img" style={{width:"140px", height:"140px"}} src={props.resImg}/>
        </div>
        <div className="res-card-info">
        <h3>{props.resName}</h3>
  {/*      
        <h4>{props.cusien}</h4>
        <h4>{props.star}</h4>
        <h4>{props.deliveryTime}</h4> */}
        </div>
      </div>
    )
  }

  
  export default RestaurantCard