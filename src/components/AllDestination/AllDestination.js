import React, { useState } from 'react'
import './AllDestination.css'
import { Slider, Select } from 'antd'
import { Places } from '../PopularPlaces/Places.js'

const { Option } = Select;

function AllDestination(){
    const {defaultValue, changeValue} = useState(75)

    
    return(
        <div className="all-destination-area">
            <div className="filter-area">
                <h3>Filter Result</h3>
                <div className="filter-bordered">
                    <Select defaultValue="Country">
                        <Option>Africa</Option>
                        <Option>Canada</Option>
                        <Option>USA</Option>
                        <Option>American</Option>
                    </Select>
                    <Select defaultValue="Travel type">
                        <Option>Advance</Option>
                        <Option>Advance</Option>
                        <Option>Premium</Option>
                    </Select>
                    <Slider range defaultValue={[75, 300]} min={0} max={600}/>
                    <input type="text" value="$75 - $300" readOnly/>
                    <button>Reset</button>
                </div>
            </div>
            <div className="destination-area">
                <div className="flex-destination">
                    {Places.map((place, index) => {
                        return(
                            <div className="single-destination" key={index}>
                                <div className='thumbnail'>
                                    <img src={place.image}/>
                                    <a href="#" className="price">$500</a>
                                </div>
                                <div className="place-information">
                                    <a href="#" className="name">{place.name}</a>
                                    <p>{place.nation}</p>
                                    <div className="rating">
                                        <span>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <a href="#">(20 Review)</a>
                                        </span>
                                        <div className="days">
                                            <i className="far fa-clock"></i>
                                            <a href="#">{place.time}</a>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        )
                    })}
                </div>
                <div className="more-places">
                    <a href="#">More places</a>
                </div>
            </div>
        </div>
    )
}
//https://ant.design/components/slider/
export default AllDestination;