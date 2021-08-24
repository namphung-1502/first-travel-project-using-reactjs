import React from 'react'
import './ItemContact.css'

function ItemContact(props){
    return(
        <div className="item-contact">
            <i className={props.contact.icon}></i>
            <div className="info">
                <h3>{props.contact.title}</h3>
                <p>{props.contact.caption}</p>
            </div>
        </div>
    )
}

export default ItemContact;