import React from 'react'
import './PopularPlaces.css'
import { Places } from  './Places.js'

export default function PopularPlaces(){
    return(
        <div className="popular_places_area">
            <div className="title">
                <h3>Popular Places</h3>
                <p>
                    Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.
                </p>
            </div>
            <div className="flex-row-popular">
                { Places.map((places, index) => {
                    return(
                        <div className="single-place" key={index}>
                            <div className="thumb">
                                <img src={places.image} />
                                <a href="#" className="price">$500</a>
                            </div>
                            <div className="place_info">
                                <a href="#" className="name">{places.name}</a>
                                <p>{places.nation}</p>
                                <div className="rating_days">
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <a href="#">(20 Review)</a>
                                    </span>
                                    <div className="days">
                                        <i className="far fa-clock"></i>
                                        <a href="#">{places.time}</a>
                                    </div>
                                </div>
                               
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            <div className="btn-more-places">
                <a href="#">More places</a>
            </div>
        </div>
    )
}
