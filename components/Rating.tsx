"use client";

import "../css/rating.css";
import GooglePlayStore from "../src/app/GooglePlayStore.png";
import AppleAppStore from "../src/app/AppleAppStore.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";


export default function Rating() {
    return (
        <section className="rating-sect">
            <div className="outer-rating">
                <div className="inner-rating">
                    <div className="title-rating">
                        <span className="headline-title">
                            <div>
                                <FontAwesomeIcon className="icon-platform" icon={faAndroid} />
                            </div>
                            <p className="ptf-title">Play Store</p>
                        </span>
                        
                        <div className="platform-rating">

                        </div>
                    </div>
                    <div className="star-rating">
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStarHalfStroke} />
                    </div>

                    <div className="stat-rating">
                        <div className="out-of-five-rating">4.3/5</div>
                        <div className="rating-stats">1,568,823 ratings</div>
                    </div>
                </div>

                <div className="inner-rating">
                    <div className="title-rating">
                        <span className="headline-title">
                            <div>
                                <FontAwesomeIcon className="icon-platform" icon={faApple} />
                            </div>
                            <p className="ptf-title">App Store</p>
                        </span>
                        
                        <div className="platform-rating">

                        </div>
                    </div>
                    <div className="star-rating">
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStar} />
                        <FontAwesomeIcon className="rating-icon" icon={faStarHalfStroke} />
                    </div>
                    <div className="stat-rating">
                        <div className="out-of-five-rating">4.6/5</div>
                        <div className="rating-stats">847,201 ratings</div>
                    </div>
                </div>

                <div className="inner-rating">
                    <span className="headline-title">
                        <p className="download-now">Download Now!</p>
                    </span>
                    <div className="dl-btns">
                        <a href=""><Image 
                            src={GooglePlayStore}
                            height={50}
                            alt="Google Play Store"></Image></a>
                        <a href=""><Image 
                            src={AppleAppStore}
                            height={50}
                            alt="Apple App Store"></Image></a>
                    </div>
                </div>

            </div>
        </section>
    )
}