import React, { useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { productContext } from "../App";

function Nav() {
    const { darkMode, setDarkMode } = useContext(productContext);

    const [open, setOpen] = useState(false);

    function handleHamburgerMenu() {
        open ? setOpen(false) : setOpen(true);
    }

    function handleDarkMode() {
        darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    return (
        <div className={darkMode ? "bg-darkPrimary text-neutral flex px-7 items-center gap-4" : "bg-primary text-neutral flex px-7 items-center gap-4"}>
            <div>
                <Link to="/">
                    <img
                        src="../Codecart logo.png"
                        alt="Logo"
                        width={"100px"}
                    />
                </Link>
            </div>
            <ul className="hidden sm:flex gap-4 ml-auto">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
                {/* <li className="text-2xl">
                    <button
                        onClick={() => {
                            handleDarkMode();
                        }}
                    >
                        <MdDarkMode />
                    </button>
                </li> */}
            </ul>

            <div className="hidden sm:flex ml-4 text-2xl">
                <Link to="/cart">{<FaCartShopping />}</Link>
            </div>
            {/* Hamburger menu */}
            <div
                onClick={() => {
                    handleHamburgerMenu();
                }}
                className="sm:hidden ml-auto text-2xl"
            >
                <GiHamburgerMenu />
            </div>

            <ul
                onClick={() => {
                    handleHamburgerMenu();
                }}
                className={
                    open
                        ? "sm:hidden flex flex-col absolute py-20 px-20 top-0 bottom-0 right-0 h-svh z-10 gap-4 ml-auto bg-teal-300"
                        : "hidden"
                }
            >
                <li className="text-3xl mb-7">
                    <Link to="/cart">{<FaCartShopping />}</Link>
                </li>
                {/* <li className="text-3xl">
                    <button
                        onClick={() => {
                            handleDarkMode();
                        }}
                    >
                        <MdDarkMode />
                    </button>
                </li> */}
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
