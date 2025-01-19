import React from 'react';
import { BsDiscord, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section Présentation */}
                <div>
                    <h2 className="text-white font-bold text-lg mb-4">À propos de moi</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Développeur passionné par la création de solutions modernes et élégantes. Toujours prêt à relever de nouveaux défis.
                    </p>
                </div>

                {/* Section Réseaux sociaux */}
                <div>
                    <h2 className="text-white font-bold text-lg mb-4">Réseaux sociaux</h2>
                    <ul className="flex gap-6">
                        <li className="hover:scale-110 transition-transform duration-300">
                            <a
                                href="https://wa.me/XXXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                            >
                                <BsWhatsapp size={28} className="text-lime-500" />
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform duration-300">
                            <a
                                href="https://www.linkedin.com/in/elhadji-malick-diop-681867268/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                            >
                                <BsLinkedin size={28} className="text-blue-500" />
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform duration-300">
                            <a
                                href="https://discord.com/" // Remplacez par votre lien Discord
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Discord"
                            >
                                <BsDiscord size={28} className="text-indigo-500" />
                            </a>
                        </li>
                        <li className="hover:scale-110 transition-transform duration-300">
                            <a
                                href="https://github.com/XXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <FaGithub size={28} className="text-gray-300" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section Contact */}
                <div>
                    <h2 className="text-white font-bold text-lg mb-4">Contact</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-green-400" />
                            <span>+221 771341649</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdEmail className="text-red-400" />
                            <span>malickelhadji07@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <span>Thiés, Sénégal</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Malick El Hadji. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
