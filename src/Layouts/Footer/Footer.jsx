import React from "react";
import logo from "../../Assets/images/misc/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
            <footer className="pb-8 bg-black">
                <div className="flex items-center justify-center mx-32 transition-all duration-300 shadow-xl max-w-screen rounded-2xl bg-primary-light shadow-secondary-light dark:bg-primary-dark dark:shadow-tertiary-dark">
                    <div className="flex flex-col items-center col-start-1 col-end-4 row-span-2 my-12 sm:col-span-4 sm:col-end-5">
                        <p className="mb-4">
                            <strong className="font-medium">
                                Simone Sechi
                            </strong>
                        </p>
                        <div className="flex mt-2 mb-8 -mx-2">
                            <a href="https://www.instagram.com/_simonesechi/">
                                <button className="flex items-center justify-center w-12 h-12 p-2 mx-2 transition-all duration-300 rounded-full shadow-md shadow-secondary-light dark:shadow-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-instagram"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/simone-sechi-721485218/">
                                <button className="flex items-center justify-center w-12 h-12 p-2 mx-2 transition-all duration-300 rounded-full shadow-md shadow-secondary-light dark:shadow-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-linkedin-in"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </a>
                            <a href="https://github.com/zzAIMoo">
                                <button className="flex items-center justify-center w-12 h-12 p-2 mx-2 transition-all duration-300 rounded-full shadow-md shadow-secondary-light dark:shadow-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark">
                                    <FontAwesomeIcon
                                        icon="fa-brands fa-github-alt"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </a>
                        </div>
                        <p className="text-gray-600">
                            Made with 💜 by Simone Sechi &nbsp;
                            <img
                                src={logo}
                                className="inline-block w-6 motion-safe:animate-spin spee"
                                alt="logo"
                            ></img>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
