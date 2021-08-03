import React from 'react'
import './PopularDestination.css'
import { Destination }  from './Destination'
export default function PopularDestination(){
    return (
        <div className="popular-destination-area">
            <div className="title">
                <h3>Popular Destination</h3>
                <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words</p>
            </div>
            <div className="flex-row-container">
                {console.log(typeof(Destination))}
               { Destination.map((item, index) => {
                   return(
                    <div className="flex-row-item" key={index}>
                        <img src={item.image} />
                       <div className="text">
                          <p>
                            <span>{item.destination}</span>
                            <a href="#">{item.places} places</a>
                          </p>
                       </div>
                    </div>
                   )
               })}
            </div>  
        </div>
    )
}