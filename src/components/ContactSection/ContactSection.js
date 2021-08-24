import React from 'react'
import './ContactSection.css'
import { DataContact } from './Contact.js'
import ItemContact from './ItemContact.js'
 
function ContactSection(){
    return(
        <div className="contact-section">
            <div className="contact-title">
                <h2>Get in Touch</h2>
            </div>
            <div className="form-contact">
                <div className="form">
                    <textarea cols={30} rows={9} placeholder="Enter message"/>
                    <div className="name-address">
                        <input type="text" placeholder="Enter your name"/>
                        <input type="text" placeholder="Enter email address"/>
                    </div>
                    <input type="text" placeholder="Enter Subject"/>
                    <button className="btn-send">SEND</button>
                </div>
                <div className="contact">
                    {DataContact.map((contact, index) => {
                        return(
                            <ItemContact contact={contact} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContactSection;