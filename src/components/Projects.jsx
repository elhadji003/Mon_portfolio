import React from "react";
import image1 from "../assets/tache1.png";
import image2 from "../assets/red-product.png";
import image3 from "../assets/Elikia.png";
import image4 from "../assets/tache5.png";
import image5 from "../assets/manga.png";
import image6 from "../assets/agency.png";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        title: "E-learning App",
        description: "Une application moderne pour l'apprentissage en ligne.",
        image: image1,
        link: "https://e-learning-ten-steel.vercel.app/",
    },
    {
        id: 2,
        title: "Radisson App",
        description: "Un site pour reserver des hotels.",
        image: image2,
        link: "https://projet-stage-front1.vercel.app/",
    },
    {
        id: 3,
        title: "Elikia Funding",
        description: "Une plateforme de gestion de projets en temps réel.",
        image: image3,
        link: "https://elikia-vc.fewnu.app/login",
    },
    {
        id: 4,
        title: "Selling on the internet like a pro",
        description: "Une landing page avec gestion dynamique.",
        image: image4,
        link: "https://elhadji003.github.io/my-app-5/",
    },
    {
        id: 5,
        title: "Mangas links",
        description: "Un site de manga pour avoir le lien de vos mangas préféré.",
        image: image5,
        link: "https://elhadji003.github.io/manga_projet/",
    },
    {
        id: 6,
        title: "Agency-BST",
        description: "Un site que j'ai développé durant mes études.",
        image: image6,
        link: "https://elhadji003.github.io/Agency-bst/",
    },
];

const Projects = () => {
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-800">
            {/* Titre */}
            <div className="mb-8">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    Mes Projets <span className="bg-none"> 🡮</span>
                </h1>
            </div>

            {/* Conteneur principal */}
            <div>
                {/* Mode mobile : Scrolling horizontal */}
                <div className="flex gap-6 overflow-x-auto scrollbar-hide md:hidden">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex-shrink-0 w-80 relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            {/* Image */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay avec animation */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
                                <div className="text-center text-white px-4">
                                    <h2 className="text-xl font-bold">{project.title}</h2>
                                    <p className="mt-2 mb-5 text-sm">{project.description}</p>
                                    {project.link && (
                                        <Link
                                            to={project.link}
                                            className="bg-white px-4 py-2 text-black rounded-md"
                                        >
                                            Visiter
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mode tablette et desktop : Grille */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            {/* Image */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full object-cover transition-transform duration-700 group-hover:translate-y-[-30%]"
                                />
                            </div>

                            {/* Overlay avec animation */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex items-center justify-center">
                                <div className="text-center text-white px-4">
                                    <h2 className="text-xl font-bold">{project.title}</h2>
                                    <p className="mt-2 mb-5 text-sm">{project.description}</p>
                                    {project.link && (
                                        <Link
                                            to={project.link}
                                            className="bg-white px-4 py-2 text-black rounded-md"
                                        >
                                            Visiter
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
