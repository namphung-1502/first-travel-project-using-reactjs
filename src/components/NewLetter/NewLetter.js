import React from 'react'
import './NewLetter.css'

export default function NewLetter(){
    return(
        <div className="newLetter_area">
            <div className="container">
                <div className="text">
                    <h4>Subscribe Our Newsletter</h4>
                    <p>Subscribe newsletter to get offers and about new places to discover.</p>
                </div>
                <div className="send_mail">
                    <input type="email" placeholder="Your mail" placeholder="Your mail"/>
                    <button>Subcribe</button>
                </div>
            </div>
        </div>
    )
}