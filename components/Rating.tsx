"use client";

import "../css/rating.css";
import GooglePlayStore from "../src/app/GooglePlayStore.png";
import AppleAppStore from "../src/app/AppleAppStore.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"


export default function Rating() {
    return (
        <section className="rating-sect">
            <div className="outer-rating">
                <Card isBlurred className="inner-rating">
                    <CardHeader className="headline-title">
                        <div>
                            <FontAwesomeIcon className="icon-platform" icon={faAndroid} />
                        </div>
                        <p className="ptf-title">Play Store</p>
                    </CardHeader>
                    <CardBody className="star-rating">
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStarHalfStroke} />
                    </CardBody>
                    <CardFooter className="stat-rating">
                        <div className="out-of-five-rating">4.3/5</div>
                        <div className="rating-stats">1,568,823 ratings</div>
                    </CardFooter>
                </Card>
                
                <Card isBlurred className="inner-rating">
                    <CardHeader className="headline-title">
                        <div>
                            <FontAwesomeIcon className="icon-platform" icon={faApple} />
                        </div>
                        <p className="ptf-title">App Store</p>
                    </CardHeader>
                    <CardBody className="star-rating">
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStarHalfStroke} />
                    </CardBody>
                    <CardFooter className="stat-rating">
                        <div className="out-of-five-rating">4.6/5</div>
                        <div className="rating-stats">847,201 ratings</div>
                    </CardFooter>
                </Card>

                <Card isBlurred className="inner-rating">
                    <CardHeader className="headline-title">
                        <p className="download-now">Download Now!</p>
                    </CardHeader>
                    <CardBody className="dl-btns">
                        <a href="">
                            <Image 
                            src={GooglePlayStore}
                            height={50}
                            alt="Google Play Store" />
                        </a>
                        <a href="">
                            <Image 
                            src={AppleAppStore}
                            height={50}
                            alt="Apple App Store" />
                        </a>
                    </CardBody>
                </Card>
            </div>
        </section>        
    )
}