import React from "react";
import '../css/button.css';
import TabsNav from "../components/TabsNav";

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-sm:py-0">
            <div className="flex gap-10 max-sm:flex-col ">
                {/* Titre et section gauche */}
                <div className="flex-shrink-0">
                    <h1 className="p-2 text-nowrap text-2xl font-bold text-gray-800">
                        A propos <span className="bg-none"> 🡮</span>
                    </h1>
                </div>

                {/* Section droite avec texte et bouton */}
                <div className="border-l-4 border-gray-300 pl-6">
                    <p className="text-black text-lg mb-4 font-semibold tracking-widest leading-relaxed">
                        Bonjour ! Je suis un développeur passionné par la création
                        d'expériences numériques captivantes. Avec une expertise dans le
                        développement web moderne, je combine design et technologie pour
                        donner vie à des idées uniques.
                    </p>
                    <p className="text-black text-lg mb-4 font-semibold tracking-widest leading-relaxed">
                        Mes spécialités incluent le développement frontend avec des outils
                        comme React et Tailwind CSS, ainsi que la création de solutions
                        backend robustes en Node.js. Je suis motivé par la résolution de
                        problèmes complexes et l'amélioration continue de mes compétences.
                    </p>
                    <p className="text-black text-lg mb-4 font-semibold tracking-widest leading-relaxed">
                        En dehors du code, j'aime explorer de nouvelles technologies,
                        partager mes connaissances et m'immerger dans des projets
                        collaboratifs. Mon objectif est de contribuer à des projets qui
                        font une différence tout en apprenant de nouvelles perspectives
                        chaque jour.
                    </p>

                    {/* Bouton avec une animation au survol */}
                    <TabsNav />
                </div>
            </div>
        </div>
    );
};

export default About;