import React from 'react'
import { Carousel } from 'antd'
import { DataCarousel } from './Data.js'
import './CarouselAntd.css'

function CarouselAntd(){      
    return(
        <Carousel autoplay>
            {DataCarousel.map((data, index) => {
                return(
                    <div className="owl-stage-outer" key={index}>
                        <img src={data.image} />
                        <p>{data.saying}</p>
                        <h3> - {data.author}</h3>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default CarouselAntd;