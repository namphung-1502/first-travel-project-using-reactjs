import React from 'react'
import './VideoArea.css'

function VideoArea(){
    return(
        <div className="video-area">
            <div className="content">
                <div className="text-wrap">
                    <h3>Enjoy Video</h3>
                </div>
                <div className="video-icon">
                    <a href='#'>
                        <i className="fas fa-play"></i>
                    </a>
                </div>
            </div>
        </div>      
    )
}

export default VideoArea;