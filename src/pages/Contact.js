import React from 'react'
import Banner from '../components/Banner/Banner.js'
import ContactSection from '../components/ContactSection/ContactSection.js';
import Footer from '../components/Footer/Footer.js'

function Contact(){
    return(
        <div className="contact">
            <Banner title="Contact" 
                    caption="Pixel perfect design with awesome contents" 
                    image="https://preview.colorlib.com/theme/travelo/img/banner/bradcam4.png.webp"/>
            <ContactSection/>  
            <Footer/>  
        </div>
    )
}

export default Contact;