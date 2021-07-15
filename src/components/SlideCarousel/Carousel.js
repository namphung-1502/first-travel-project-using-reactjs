import React, {useState} from 'react'
import './Carousel.css'
import { SliderData } from './SliderData'


export function Carousel(){
    const [x, setX] = useState(0)

    const nextSlide = () => {
        x === -100 ? setX(100) : setX(x - 100)
    } 

    const previousSlide = () => {
        x === 100 ? setX(-100) : setX(x + 100)
    }

    return(
        <section className="slider">
            <button className="previous-button" onClick={previousSlide}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <button className="next-button" onClick={nextSlide}>
                <i className="fas fa-arrow-right"></i>
            </button>
            {SliderData.map((slide, index) => {
                return(
                  <div className="slide" key={index} style={{backgroundImage: `url(${slide.image})`, transform:`translateX(${x}%)`}}>
                      <div className="slide-content-wrap">
                        <h3 className="title">{slide.title}</h3>
                        <p className="caption">Pixel perfect design with awesome contents</p>
                      </div>
                  </div>
                )
            })}
            <a href="/" className="explore">Explore Now</a>
        </section>
    )
}