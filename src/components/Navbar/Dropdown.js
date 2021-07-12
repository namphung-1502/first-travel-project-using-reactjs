import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'
import { MenuItemsBlog } from './MenuItems.js'

export default function Dropdown(){
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return(
       <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItemsBlog.map(((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName}
                              to={item.path}
                              onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            }))}
       </ul>
    )
}