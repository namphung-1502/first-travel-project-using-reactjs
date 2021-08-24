import React from 'react'
import Banner from '../components/Banner/Banner.js'
import { SearchForm } from "../components/SearchForm/SearchForm"
import AllDestination from '../components/AllDestination/AllDestination.js'
import NewLetter from '../components/NewLetter/NewLetter.js'
import RecentTrip from '../components/RecentTrip/RecentTrip.js'
import Footer from '../components/Footer/Footer.js'

function Destination(){
    return(
        <div className="destination">
            <Banner title="Destination" 
                    caption="Pixel perfect design with awesome contents" 
                    image="https://preview.colorlib.com/theme/travelo/img/banner/bradcam2.png.webp"/>
            <SearchForm/>
            <AllDestination/>
            <NewLetter/>
            <RecentTrip/>
            <Footer/>
        </div>
    )
}

export default Destination;