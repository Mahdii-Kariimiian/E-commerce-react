import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="text-text bg-background h-screen p-10">
            <div className="lg:w-[50%]">
                <h1 className="text-xl mb-3">
                    {" "}
                    About my Practice Shopping Site
                </h1>
                <p className="mb-3">
                    Welcome to my practice shopping site! This platform is
                    developed as a learning exercise, utilizing modern web
                    development technologies such as React, Tailwind CSS, and
                    other libraries to create a functional and interactive
                    online shopping experience. Let's delve into what makes my
                    practice site unique.
                </p>
                <h2 className="text-lg mb-3">Mock E-commerce Experience</h2>
                <p className="mb-5">
                    While this site is primarily a practice exercise, it
                    simulates the experience of browsing and shopping for
                    products online. Users can explore a range of products, add
                    items to their cart, adjust quantities, and proceed to
                    checkout. Learning and Skill Development.
                </p>
                <button className="button text-white bg-primary">
                    <Link to="/products">Back </Link>{" "}
                </button>
            </div>
        </div>
    );
}

export default About;
