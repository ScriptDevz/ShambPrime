"use client";

import "../css/header.css";
// import React from "react"
import Image from "next/image";
import logo from "../src/app/logo.png"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import {Button, ButtonGroup} from "@nextui-org/button";
import { div, span } from "framer-motion/client";
import { FunctionComponent } from "react";


interface ModalSection {
    name: string;
}

let explore = ["Featured", "Movies & TV Shows", "Live TV Channels", "Most Popular", "Leaving Soon"];
let categoriesLT = ["Action", "Comedy", "Descriptive Audio", "Drama", "Horror", "Romance", "Thriller"];
let categoriesRT = ["Animation", "Crime", "Documentary", "En Español", "Music", "Sci-Fi", "Western"];


const SectionTab: FunctionComponent<ModalSection> = ({name}) => {
    return(
        <>
         <span>{name}</span>
        </>
    )
}

export default function Header() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
                        <span id="cont-tab" onMouseEnter={onOpen} onMouseLeave={onOpen}>Free Movies & TV</span>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" closeButton="none" className="modal">
                            <ModalContent>
                                {
                                    (onClose) => (
                                        <>
                                            <ModalHeader className="modal-head">
                                                <ModalBody className="modal-body">
                                                    <div className="explore-sec">
                                                        <span className="section-title">Explore</span>
                                                        {
                                                            explore.map((data, index) =>(
                                                                <span className="section">{data}</span>
                                                            ) )
                                                        }
                                                    </div>
                                                    <div className="categories-sec">
                                                        <span className="section-title">Categories</span>
                                                        <div className="categories">
                                                            <div className="cat-left">
                                                                {
                                                                    categoriesLT.map((data, index) =>(
                                                                        <span className="section">{data}</span>
                                                                    ) )
                                                                }
                                                            </div>
                                                            <div className="cat-right">
                                                                { 
                                                                    categoriesRT.map((data, index) =>(
                                                                        <span className="section">{data}</span>
                                                                    ) )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ModalBody>
                                            </ModalHeader>
                                        </>
                                    )
                                }
                            </ModalContent>
                        </Modal>
                        
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
    </header>
}