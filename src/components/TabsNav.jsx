import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import TimelLine from "./TimelLine";
import image from "../assets/image.png"

const TabsNav = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", title: "Compétences" },
        { id: "experience", title: "Expériences" },
        { id: "contact", title: "Éducations" },
        { id: "awards", title: "Récompenses" },
        { id: "certifications", title: "Certifications" },
    ];

    const languageData = [
        { label: "HTML & CSS", progress: 80 },
        { label: "JavaScript", progress: 70 },
        { label: "React.js", progress: 60 },
    ];

    const toolsData = [
        { label: "Git", progress: 75 },
        { label: "Bootstrap", progress: 85 },
        { label: "Tailwind CSS", progress: 65 },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return (
                    <div className="flex gap-5 p-4 max-sm:flex-col">
                        <ProgressBar title="Langages" data={languageData} />
                        <ProgressBar title="Outils" data={toolsData} />
                    </div>
                );
            case "experience":
                return (
                    <div className="p-4">
                        <TimelLine />
                    </div>
                );
            case "contact":
                return (
                    <div className="p-4">
                        <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                            <li>
                                <h3 className="font-semibold text-lg">
                                    Brevet de Fin d'Études Moyennes BFEM
                                </h3>
                                <p className="text-sm">
                                    Obtenu en 2018, École : Lycée Alboury Ndiaye de Linguère.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">
                                    Baccalauréat
                                </h3>
                                <p className="text-sm">
                                    Obtenu en 2022, En serie L.
                                    École : Lycée Alboury Ndiaye de Linguère.
                                </p>
                            </li>
                        </ul>
                    </div>
                );
            case "awards":
                return (
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Récompenses
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Pas encore
                        </p>
                    </div>
                );
            case "certifications":
                return (
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Certifications
                        </h2>
                        <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-300">
                            <li>
                                <h3 className="font-semibold text-lg">
                                    Certification Responsive Web Design
                                </h3>
                                <p className="text-sm">
                                    Obtenue en 2023, délivrée par FreeCodeCamp.
                                </p>
                                <img src={image} alt="" className="scale-75" />
                            </li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-3xl m-auto text-center">
            <div className="border-b rounded-full border-gray-300 dark:border-gray-700 max-sm:rounded-full">
                <nav className="flex lg:justify-center max-sm:flex max-sm:overflow-x-auto max-sm:space-x-4 items-center justify-start">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap px-4 py-2 text-sm font-medium ${activeTab === tab.id
                                ? "border-2 rounded-full border-white m-1 text-white bg-black text-center transition duration-150 ease-in-out"
                                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </nav>

            </div>
            <div className="mt-4">{renderContent()}</div>
        </div>
    );
};

export default TabsNav;
