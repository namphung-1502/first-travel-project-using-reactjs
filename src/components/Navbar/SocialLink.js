import React from 'react'
import './SocialLink.css'

export function SocialLink(){
    return(
        <div className="social-links">
            <ul>
                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
            </ul>
        </div>
    )
}