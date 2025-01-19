import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, to, icon }) => {
    return (
        <div className="">
            <Link
                to={to}
                className="relative inline-block px-2 py-1 text-lg font-medium border border-black rounded-lg shadow-md group overflow-hidden"
            >
                <span
                    className="absolute inset-0 w-full h-full bg-black transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"
                ></span>
                <span className="flex items-center text-nowrap gap-2 relative text-black group-hover:text-white ">
                    {name} {icon}
                </span>
            </Link>
        </div>
    );
};

export default Button;
