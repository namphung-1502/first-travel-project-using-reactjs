import React from 'react'
import Banner from '../components/Banner/Banner.js'
import AboutStory from '../components/AboutStory/AboutStory.js'
import VideoArea from '../components/VideoArea/VideoArea.js'
import TravelVariation from '../components/TravelVariation/TravelVariation.js'
import CarouselAntd from '../components/CarouselAntd/CarouselAntd.js'
import RecentTrip from '../components/RecentTrip/RecentTrip.js'
import Footer from '../components/Footer/Footer.js'


function About(){
    return(
        <div className="about">
            <Banner title="About Us" caption="Pixel perfect design with awesome contents" image="https://preview.colorlib.com/theme/travelo/img/banner/bradcam3.png.webp"/>
            <AboutStory/>
            <VideoArea/>
            <TravelVariation/>
            <CarouselAntd/>
            <RecentTrip/>
            <Footer/>
        </div>  
    )
}

export default About;