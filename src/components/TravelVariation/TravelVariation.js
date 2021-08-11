import React from 'react'
import './TravelVariation.css'
import { VariationData } from './VariationData.js'

function TravelVariation(){
    return(
        <div className="travel_variation_area">
            {VariationData.map((variation, index) => {
                return(
                    <div className="single_travel" key={index}>
                        <div className="icon">
                            <img src={variation.image}/>
                        </div>
                        <h3>{variation.title}</h3>
                        <p>{variation.caption}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TravelVariation;