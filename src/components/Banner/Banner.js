import React from 'react'
import './Banner.css'
function Banner(props){
    return(
        <div className="banner" style={{backgroundImage:`url(${props.image})`}}>
            <div className="banner-text">
                <h3>{props.title}</h3>
                <p>{props.caption}</p>
            </div>
        </div>
    )
}

export default Banner;