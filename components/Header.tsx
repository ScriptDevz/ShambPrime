"use client";

import "../css/header/header.css";
import "../css/header/movieGrid.css";
import "../css/header/tvGrid.css";
import "../css/header/featuresGrid.css";
import "../css/header/downloadGrid.css";
import "../css/header/profileGrid.css";
import Image from "next/image";
import logo from "../src/app/logo.png"
import {Divider} from "@nextui-org/divider";
import {Button} from "@nextui-org/button";
import { useState } from "react";

import movieList from "./headerData/moviesList"
import tvList from "./headerData/tvList"
import featuresList from "./headerData/featuresList";
import downloadList from "./headerData/downloadList";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"
import {Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, DropdownSection, Avatar} from "@nextui-org/react";

export default function Header() {

    const [movieIsShowing, moiveSetIsShowing] = useState(false)
    const [tvIsShowing, tvSetIsShowing] = useState(false)
    const [featureIsShowing, featureSetIsShowing] = useState(false)
    const [downloadIsShowing, downloadSetIsShowing] = useState(false)


    return (
        <Navbar id="navbar" position="static" maxWidth="full"> 
                   
                   <NavbarContent justify="start">
                    <NavbarBrand>
                    <p>Shamb Prime</p>
                   </NavbarBrand>
                    <NavbarItem >
                    <input
                        type="text"
                        placeholder="&#xf002;   Find Movies & TV"            
                    />
                    </NavbarItem>
                   </NavbarContent>
                    

                    <NavbarContent justify="end">
                    <NavbarItem>
                    <Dropdown isOpen={movieIsShowing} showArrow={true} 
                     >                        
                        <DropdownTrigger>
                            <span
                                onMouseEnter={() => moiveSetIsShowing(true)}
                                onMouseLeave={() => moiveSetIsShowing(false)}

                            >
                                Free Movie & TV
                            </span>
                        </DropdownTrigger>
                        <DropdownMenu
                        aria-label="Menu"
                        onMouseEnter={() => moiveSetIsShowing(true)}
                        onMouseLeave={() => moiveSetIsShowing(false)}
                        className="list-container"
                        >
                                    {
                                        movieList.map((item) => item)
                                    }
                        </DropdownMenu>
                        </Dropdown> 
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown isOpen={tvIsShowing} showArrow={true} >
                            <DropdownTrigger>
                                <span
                                onMouseEnter={() => tvSetIsShowing(true)}
                                onMouseLeave={() => tvSetIsShowing(false)}
                                >Live TV</span>
                            </DropdownTrigger>
                            <DropdownMenu
                                className="list-container"
                                onMouseEnter={() => tvSetIsShowing(true)}
                                onMouseLeave={() => tvSetIsShowing(false)}
                                aria-label="Tv"

                            >
                                {
                                    tvList.map((item) => item)
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown isOpen={featureIsShowing} showArrow={true}>
                            <DropdownTrigger
                                onMouseEnter={() => featureSetIsShowing(true)}
                                onMouseLeave={() => featureSetIsShowing(false)}
                            >
                                <span>Features</span>
                            </DropdownTrigger>
                            <DropdownMenu
                            aria-label="Features"
                            onMouseEnter={() => featureSetIsShowing(true)}
                            onMouseLeave={() => featureSetIsShowing(false)}
                            className="list-container"
                            >
                                {
                                    featuresList.map((item) => item)
                                }
                            </DropdownMenu>
                        </Dropdown>   
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown isOpen={downloadIsShowing} showArrow={true}>
                            <DropdownTrigger>
                                <span
                                    onMouseEnter={() => downloadSetIsShowing(true)}
                                    onMouseLeave={() => downloadSetIsShowing(false)}
                                >Download</span>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Downloads"
                                onMouseEnter={()=> downloadSetIsShowing(true)}
                                onMouseLeave={() => downloadSetIsShowing(false)}
                                className="list-container"
                            >
                                {
                                    downloadList.map((item) => item)
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                    
                </NavbarContent>
                <Divider orientation="vertical" id="nav-divider"/>


                <NavbarContent justify="end" id="navbar-last">
                <NavbarItem>
                        <Button id="open-btn">Open ShambPrime</Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar size="sm" id="avatar">
                                </Avatar>
                            </DropdownTrigger>
                            <DropdownMenu
                                className="list-container"

                            >
                                <DropdownSection >
                                <DropdownItem>
                                    Shamb
                                </DropdownItem>
                                <DropdownItem>
                                    Account Settings
                                </DropdownItem>
                                <DropdownItem>
                                    My Watchlist
                                </DropdownItem>
                                <DropdownItem>
                                    Support
                                </DropdownItem>
                                </DropdownSection>
                                <DropdownSection >
                                <DropdownItem>
                                    Sign Out
                                </DropdownItem>
                                </DropdownSection>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarItem>
                </NavbarContent>
        </Navbar>
    )
}
 