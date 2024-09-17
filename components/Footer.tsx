"use client";

import "../css/footer.css"
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faSquareFacebook, faSquareInstagram, faSquareXTwitter, faSquareYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer(): ReactElement {
    return <footer>
            <div className="footer-items">
                <div className="sub-footer above-text">
                    <div className="sub-half-footer">
                        <div className="copyright">Copyright © ScirptDevz - 2024</div>
                        <div className="footer-menu">
                            <ul className="footer-menu-sub">
                                <li className="menu-list"><a href="">Accessibility</a></li>
                                <li className="menu-list"><a href="">Cookies Manager</a></li>
                                <li className="menu-list"><a href="">Legal & Privacy</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="social-list above-text">
                        <a href=""><FontAwesomeIcon className="social-icons" icon={faSquareFacebook} /></a>
                        <a href=""><FontAwesomeIcon className="social-icons" icon={faSquareInstagram} /></a>
                        <a href=""><FontAwesomeIcon className="social-icons" icon={faLinkedin} /></a>
                        <a href=""><FontAwesomeIcon className="social-icons" icon={faSquareXTwitter} /></a>
                        <a href=""><FontAwesomeIcon className="social-icons" icon={faSquareYoutube} /></a>
                        
                    </div>
                </div>
                <div className="sub-footer">Personal Information / Targeted Ads option</div>
            </div>
        </footer>;
}