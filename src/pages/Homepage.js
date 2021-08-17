import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Carousel } from "../components/SlideCarousel/Carousel"
import { SearchForm } from "../components/SearchForm/SearchForm"
import PopularDestination from "../components/PopularDestination/PopularDestination"
import NewLetter from "../components/NewLetter/NewLetter"
import PopularPlaces from "../components/PopularPlaces/PopularPlaces"
import TravelVariation from "../components/TravelVariation/TravelVariation"
import CarouselAntd from "../components/CarouselAntd/CarouselAntd"
import RecentTrip from "../components/RecentTrip/RecentTrip"
import Footer from "../components/Footer/Footer"

function Homepage(){
    return(
        <div className="root">
            <Carousel/>
            <SearchForm/>
            <PopularDestination/>
            <NewLetter/>
            <PopularPlaces/>
            <TravelVariation/>
            <CarouselAntd/>
            <RecentTrip/>
            <Footer/>
        </div>
    )
}

export default Homepage;