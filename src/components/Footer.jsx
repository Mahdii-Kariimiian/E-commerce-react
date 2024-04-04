import React, { useContext } from "react";
import { productContext } from "../App";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

function Footer() {
    const { darkMode } = useContext(productContext);

    return (
        <div
            className={
                darkMode
                    ? " text-neutral bg-darkPrimary text-center py-7 px-7"
                    : " text-neutral bg-primary text-center py-7 px-7"
            }
        >
            <h1 className="mb-4">Developed by : Mahdi Karimian</h1>
            <div className="flex gap-4 justify-center items-center">
                <p className="text-2xl">
                    <a
                        aria-label="github page"
                        href="https://github.com/Mahdii-Kariimiian"
                    >
                        <FaGithub />
                    </a>
                </p>
                <p className="text-2xl">
                    <a
                        aria-label="linkedin page"
                        href="https://www.linkedin.com/in/mahdi-karimian-116643273/"
                    >
                        <IoLogoLinkedin />
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;
