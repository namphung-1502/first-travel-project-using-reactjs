import React from 'react'
import Banner from '../components/Banner/Banner.js'
import { SearchForm } from "../components/SearchForm/SearchForm"

function Destination(){
    return(
        <div className="destination">
            <Banner title="Destination" caption="Pixel perfect design with awesome contents" image="https://preview.colorlib.com/theme/travelo/img/banner/bradcam2.png.webp"/>
            <SearchForm/>
        </div>
    )
}

export default Destination;