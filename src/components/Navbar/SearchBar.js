import React, { Component, useState} from 'react'
import classNames from 'classnames'
import './SearchBar.css'

export function SearchBar(){
    const [isActive, setActive] = useState(false)
        return(
            <div className="root">
                <div className={classNames(
                    'overlay',{
                        'openSearch':isActive === true,
                        'closeSearch':isActive === false
                    }
                )}>
                    <span className="btnClose" onClick={() => setActive(false)}>x</span>
                    <div className="overlay-content">
                        <form>
                            <input type="text" placeholder="Search"/>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <button className="openBtn" onClick={() => setActive(true)}><i className="fas fa-search"></i></button>
            </div>
        )  
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_fullscreen_search
