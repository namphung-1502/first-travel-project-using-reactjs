import React from 'react'
import logo from '../../images/logo.png'
import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="info">
                    <img src={logo}/>
                    <p>
                        5th flora, 700/D kings road, green lane New York-1782 <br/>
                        <a href="#">+10 367 826 2567</a><br/>
                        <a href="#">contact@carpenter.com</a>
                    </p>
                    <ul>
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div className="company">
                    <h3>Company</h3>
                    <ul className="common-ul">
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="popular-destination-footer">
                    <h3>Popular Destination</h3>
                    <ul className="common-ul">
                        <li><a href="#">Indonesia</a></li>
                        <li><a href="#">America</a></li>
                        <li><a href="#">India</a></li>
                        <li><a href="#">Switzerland</a></li>
                        <li><a href="#">Italy</a></li>
                        <li><a href="#">Canada</a></li>
                        <li><a href="#">Franch</a></li>
                        <li><a href="#">England</a></li>
                    </ul>
                </div>
                <div className="instagram">
                    <h3>Instagram</h3>
                    <div className="image-instagram">
                        <img className="image" src="https://preview.colorlib.com/theme/travelo/img/instagram/2.png.webp"/>
                        <img className="image" src="https://preview.colorlib.com/theme/travelo/img/instagram/4.png.webp"/>
                        <img className="image" src="https://preview.colorlib.com/theme/travelo/img/instagram/2.png.webp"/>
                        <img className="image" src="https://preview.colorlib.com/theme/travelo/img/instagram/4.png.webp"/>
                        <img className="image" src="https://preview.colorlib.com/theme/travelo/img/instagram/2.png.webp"/>
                        <img className="image" src="https://preview.colorlib.com/theme/travelo/img/instagram/4.png.webp"/>

                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p>Copyright 2021 All right reserved | This website make by namphung1502</p>
            </div>
        </div>
    )
}
export default Footer;