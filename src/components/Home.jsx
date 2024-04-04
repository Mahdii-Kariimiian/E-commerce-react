import React from "react";
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="bg-[url('../background-mobile.jpg')] sm:bg-[url('../background.jpg')] bg-center bg-cover  h-screen flex flex-col gap-[50px] sm:gap-[150px] items-center justify-start">
            <h1 className="text-2xl sm:text-4xl font-bold text-secondary sm:text-primary mt-[160px]">Welcome to CODECART</h1>
            <Link className="bg-secondary sm:bg-primary px-10 py-4 rounded-md text-neutral font-bold" to="/products">See Products</Link>
        </div>
    );
}

export default Home;
