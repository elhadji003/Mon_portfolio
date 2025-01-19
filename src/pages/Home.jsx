import React, { useEffect, useState } from "react";
import Slide from "../components/Slide";
import About from "./About";
import Contact from "./Contact";
import Button from "../components/Button";
import { BsDownload } from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
    const [hours, setHours] = useState("");

    const handleHours = () => {
        const currentHour = new Date().getHours();
        if (currentHour <= 18) {
            setHours("Bonjour...");
        } else {
            setHours("Bonsoir...");
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
        handleHours();
    }, []);

    return (
        <div className="min-h-screen bg-white text-black" id="home">
            {/* Section principale */}
            <div className="container mx-auto flex flex-col items-center justify-between px-4 py-16  max-sm:py-4 lg:flex-row lg:px-8" data-aos="fade-up-right">
                {/* Section Texte */}
                <div className="lg:text-left md-w-full">
                    <h6 className="text-black font-bold">{hours}</h6>
                    <h1 className="text-4xl font-extrabold text-black sm:text-5xl lg:text-6xl">
                        Bienvenue sur mon <span className="text-gray-700">Portfolio</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl lg:text-2xl">
                        Moi, c'est <span className="text-black font-bold">Elhadji Malick Diop</span> <br />
                        Développeur{" "}<span className="text-black font-bold">Full-Stack</span>
                    </p>
                    <div className="mt-10 flex sm:flex-wrap gap-6 max-sm:mt-4 md:mt-4 md:mb-4">
                        <Button name={"Télécharger mon CV"} icon={<BsDownload />} />
                    </div>
                </div>

                {/* Section Image */}
                <div className="w-full md:w-full mt-8 md:mt-0" data-aos="fade-up-left">
                    <Slide />
                </div>
            </div>

            {/* Section À propos */}
            <section id="about" data-aos="fade-up">
                <About />
            </section>

            {/* Section Projets */}
            <section id="projets" data-aos="fade-up">
                <Projects />
            </section>

            {/* Section Contact */}
            <section id="contact" data-aos="fade-up">
                <Contact />
            </section>

            {/* section footer */}
            <section id="contact" data-aos="fade-up">
                <Footer />
            </section>
        </div>
    );
};

export default Home;
