"use client";

import "../css/blog.css";
import test1 from "../src/app/Test1.png";
import test2 from "../src/app/Test2-2.png";
import test3 from "../src/app/Test3.png";
import Image from "next/image"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Blog() {
    return (
        <section className="blog-sect">
            <div className="blog-headline">
                <h2>Blog Posts</h2>
            </div>

            <div className="blog-post-ctr">
                <Card isBlurred className="each-blog-post">
                    <CardFooter className="blogpost">
                        <p className="text-over-img">The Sidewinder</p>
                        <Image className="blog-img" src={test1} alt="Sidewinder Spaceship from Elite Dangerous" />
                    </CardFooter>
                </Card>

                <Card isBlurred className="each-blog-post">
                    <CardFooter className="blogpost">
                        <p className="text-over-img">The Corvette</p>
                        <Image className="blog-img" src={test2} alt="Federal Corvette Spaceship from Elite Dangerous" />
                    </CardFooter>

                </Card>

                <Card isBlurred className="each-blog-post">
                    <CardFooter className="blogpost">
                        <p className="text-over-img">The Python</p>
                        <Image className="blog-img" src={test3} alt="Python Spaceship from Elite Dangerous" />
                    </CardFooter>

                </Card>
            </div>

     </section>
    )
}