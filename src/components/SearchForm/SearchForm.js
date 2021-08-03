import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './SearchForm.css'

export function SearchForm(){
    const [type, setType] = useState('text');
    const [startDate, setStartDate] = useState(null);
    return(
        <div className="where-goto">
            <div className="question">
                <p>Where you want to go?</p>
            </div>
            <div className="form-search">
                <input type="text" placeholder="Where to go" className="where"/>
                {/* <input type={type} placeholder="Date" onBlur={() => setType('text')} onFocus={() => setType('date')} className="date"/> */}
                <DatePicker 
                    className="form-control-inputDate"
                    placeholderText="Date"
                    selected={startDate} onChange={(date) => setStartDate(date)}  
                    popperPlacement="bottom"
                    popperModifiers={{
                        flip: {
                            behavior: ["bottom"] // don't allow it to flip to be above
                        },
                        preventOverflow: {
                            enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                        },
                        hide: {
                            enabled: false // turn off since needs preventOverflow to be enabled
                        }
                    }}/>
                <select id="travelType" className="travelType" placeholder="Travel type">
                    <option value="volvo">Travel type</option>
                    <option value="saab">Some option</option>
                    <option value="fiat">Another type</option>
                </select>
                <button className="btn-search">Search</button>
            </div>
        </div>
    )
}

//https://github.com/Hacker0x01/react-datepicker/issues/1246