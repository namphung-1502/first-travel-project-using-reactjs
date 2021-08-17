import React from 'react'
import './AboutStory.css'
import { Counter } from './Counter.js'

function AboutStory(){
    return(
        <div className="aboutStory">
           <div className="aboutStory-wrap">
            <div className="storyHeading">
                    <h3>Our Story</h3>
                </div>
                <div className="info-story-wrap">
                    <div className="story-info">
                        <p>Consulting represents success at realizing the company is going in the wrong direction. 
                        The only time the company fails is when it is not possible to do a turnaround anymore. 
                        We help companies pivot into more profitable directions where they can expand and grow.
                        It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                        </p>
                        <p>
                            Consulting represents success at realizing the company is going in the wrong direction. 
                            The only time the company fails is when it is not possible to do a turnaround anymore. 
                            We help companies pivot into more profitable directions where they can expand and grow. 
                            It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                        </p>
                    </div>
                    <div className="story-thumb">
                        <div className="story-thumb1">
                            <img src="https://preview.colorlib.com/theme/travelo/img/about/1.png.webp"/>
                        </div>
                        <div className="story-thumb2">
                            <img src="https://preview.colorlib.com/theme/travelo/img/about/2.png.webp"/>
                        </div>
                    </div>
                    <div className="counter-wrap">
                        {Counter.map((counter, index) => {
                            return(
                                <div className="single-counter" key={index}>
                                    <h3 className="counter-number">{counter.number}</h3>
                                    <p>{counter.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default AboutStory;