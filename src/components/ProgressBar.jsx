import { Progress } from "flowbite-react";
import React from "react";

const ProgressBar = ({ title, data }) => {
    return (
        <div className="w-1/2 max-sm:w-full">
            <h2 className="text-center font-semibold text-lg mb-4">{title}</h2>
            {data.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className="mb-2 text-sm">{item.label}</div>
                    <div className="relative">
                        <Progress
                            progress={item.progress}
                            color="dark"
                            size="lg"
                            className="relative bg-gray-300"
                        />
                        <span
                            className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm"
                            style={{ zIndex: 1 }}
                        >
                            {`${item.progress}%`}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
