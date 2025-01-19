import React, { useState } from "react";
import useScroll from "../hooks/useScroll";
import { FaEnvelope, FaHome, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isScroll = useScroll(); // Hook pour détecter le défilement

    const navItems = [
        { id: 1, icon: <FaHome size={18} />, href: "#home", label: "Accueil" },
        { id: 2, icon: <FaInfoCircle size={18} />, href: "#about", label: "À propos" },
        { id: 3, icon: <FaProjectDiagram size={18} />, href: "#projets", label: "Projets" },
        { id: 4, icon: <FaEnvelope size={18} />, href: "#contact", label: "Contact" },
    ];

    return (
        <div
            className={`fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out ${isScroll ? "bg-black bg-opacity-60 text-white" : "bg-white"} text-gray-800 shadow-md`}
        >
            <div className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
                {/* Logo et bouton toggle */}
                <div className="flex flex-row items-center justify-between p-4">
                    <a
                        href="#home"
                        className="focus:shadow-outline rounded-lg text-lg font-semibold uppercase tracking-widest focus:outline-none"
                    >
                        MonSite
                    </a>
                    <button
                        className="focus:shadow-outline rounded-lg focus:outline-none lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="h-6 w-6"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <nav
                    className={`${isMenuOpen ? "max-h-screen py-4 rounded-b-lg" : "max-h-0"
                        } overflow-hidden me-auto flex-grow flex-col transform transition-all duration-500 ease-in-out md:flex md:flex-row md:max-h-full md:transform-none md:pb-0 md:justify-end`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold hover:bg-white hover:text-gray-900 rounded-lg"
                        >
                            {item.icon}
                            <span className="lg:block">{item.label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;