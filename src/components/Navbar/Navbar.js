import React, { Component, useState } from 'react'
import { Number } from './Number'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import logo from '../../images/logo.png'
import { SocialLink } from './SocialLink'
import { SearchBar } from './SearchBar'

export default function Navbar() {
    const [click, setClick] = useState(false) // init click = false
    const closeMobileMenu = () => setClick(false)  
    const [dropdown, setDropdown] = useState(false)
    const handleClick = () => setClick(!click)
    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }

    return(
        <nav className="navbar">
            <Link to='/' className="navbar-logo">
                <img src={logo}/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/destination' className='nav-links' onClick={closeMobileMenu}>Destination</Link>
                </li>
                <li className="nav-item"
                    onMouseLeave={onMouseLeave} 
                    onMouseEnter={onMouseEnter}>
                    <Link to='/blog' 
                          className='nav-links' 
                          onClick={closeMobileMenu} 
                          >
                        Blog <i className='fas fa-caret-down'></i>
                    </Link>
                    { dropdown && <Dropdown/> }
                </li>
                <li className="nav-item">
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                </li>
            </ul>   
            <Number/>
            <SocialLink/>
            <SearchBar/>
        </nav>
    )
}

// https://www.youtube.com/watch?v=T2MhVxJxsL0