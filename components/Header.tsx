"use client";

import "../css/header.css"
import Image from "next/image";
import logo from "../src/app/logo.png"


export default function Header() {
    return <header>
                <div className="search-container">
                   <Image 
                    src={logo}
                    width={50}
                    height={10}
                    alt="logo"
                   />
                    <input
                        type="text"
                        placeholder="&#xf002;   Find Movies & TV"            
                    />
                </div>
                <div className="tab-container">
                    <div className="content-tabs">
                        <span id="cont-tab">Free Movies & TV</span>
                        <span id="cont-tab">Live TV</span>
                        <span id="cont-tab">Features</span>
                        <span id="cont-tab">Download</span>
                    </div>
                    |
                    <div className="profile-container">
                        <span>Open ShambPrime</span>
                        <span>Profile</span>
                    </div>
                </div>
    </header>;
}