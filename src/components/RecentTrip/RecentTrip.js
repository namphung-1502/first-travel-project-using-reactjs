import React from 'react'
import './RecentTrip.css'
import { Trips } from './Trips.js'

function RecentTrip(){
    return(
        <div className="recent-trip-area">
            <div className="recent-trip-title">
                <h3>Recent Trips</h3>
            </div>
            <div className="trips">
                {Trips.map((trip, index) => {
                    return(
                        <div className="single-trip" key={index}>
                            <img src={trip.image}/>
                            <span>{trip.date}</span>
                            <h3>{trip.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )   
}
export default RecentTrip;