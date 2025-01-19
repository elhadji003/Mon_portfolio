import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <div>
            {/* Navbar affichée en haut */}
            <Navbar />

            {/* Contenu des routes enfants */}
            <main className="mt-[64px]"> {/* Ajout de marge pour éviter le chevauchement */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
