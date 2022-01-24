import React from "react"

export default function Card(props) {
  return (
    <div className="card-section">

      <img src= {props.item.imageUrl} alt="mount-fuji" className="card-img"/>

      <div className="card-details">

        <div className="card-location">
          <img src="../images/location-pin.png" alt="location-icon" className="location-icon" />
          <div className="location-details">
            <span className="location-name">{props.item.location}</span>
            <span className="location-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
          </div>          
        </div>

        <div className="card-info">
          <h2 className="card-title">{props.item.title}</h2>
          <h4 className="card-date">{props.item.startDate} - {props.item.endDate}</h4>
          <p className="card-description">{props.item.description}</p>
        </div>
      </div>
    
    </div>
  )
}