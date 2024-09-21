"use client";

import "../css/info.css"
import logo from "../src/app/logo.png"
import Image from "next/image"

export default function Info() {
    return (
        <section className="info-sect">
            <div className="info-list">
            <Image src={logo} width={200} alt="logo"/>
                <ul className="info-menu">
                    <li>
                        <a href="" className="menu-title">Company</a>
                        <ul className="info-sub-menu">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Culture</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Gears</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Advertisements</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="" className="menu-title">ShambPrime+</a>
                        <ul className="info-sub-menu">
                            <li><a href="">Premium Memberships</a></li>
                            <li><a href="">ShambMusic</a></li>
                            <li><a href="">ShambLabs</a></li>
                            <li><a href="">Exclusives & Perks</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="" className="menu-title">Downloads</a>
                        <ul className="info-sub-menu">
                            <li><a href="">ShambServer</a></li>
                            <li><a href="">ShambMusic</a></li>
                            <li><a href="">ShambPics</a></li>
                            <li><a href="">ShambMain</a></li>
                            <li><a href="">Where to Watch</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="" className="menu-title">Support</a>
                        <ul className="info-sub-menu">
                            <li><a href="">Help</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Forum</a></li>
                            <li><a href="">Billing</a></li>
                            <li><a href="">Status</a></li>
                            <li><a href="">Bug Bounty</a></li>
                            <li><a href="">Shamb CordFree</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="" className="menu-title">Watch For Free</a>
                        <ul className="info-sub-menu">
                            <li><a href="">Discover</a></li>
                            <li><a href="">TV Channel Lookup</a></li>
                            <li><a href="">What to Watch</a></li>
                            <li><a href="">X-23 Movies</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </section>
    )
}