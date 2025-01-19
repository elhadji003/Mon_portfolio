import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsDiscord, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-16" id="contact">
            {/* Header */}
            <div className="flex-shrink-0">
                <h1 className="p-2 text-nowrap text-2xl font-bold text-gray-800">
                    Contactez-moi <span className="bg-none"> 🡮</span>
                </h1>
            </div>

            <div className="flex max-sm:flex-col gap-8">
                {/* Left Section */}
                <div className="lg:w-1/2 shadow-md text-white p-8 rounded-md shadow-md flex flex-col gap-10 items-center justify-center">
                    {/* Icon */}
                    <div className="text-4xl text-black">
                        <BiEnvelope size={50} />
                    </div>
                    {/* Description */}
                    <div className="text-lg tracking-widest leading-relaxed text-center text-black">
                        Vous avez une question ou un projet à discuter ? N'hésitez pas à me contacter via le formulaire ci-contre.
                        Je suis disponible pour collaborer et répondre à vos besoins.
                    </div>
                </div>


                {/* Right Section */}
                <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
                    <span className="font-bold">* Information personnel *</span>
                    <form action="" method="POST">
                        {/* Name Field */}
                        <div className="relative my-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                autoComplete="off"
                                placeholder=" "
                                className="peer w-full px-4 py-3 text-black bg-transparent border-2 border-gray-300 rounded-md outline-none focus:border-black focus:ring-0 transition duration-300"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-4 top-3 text-black bg-transparent px-1 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:bg-white peer-focus:text-black"
                            >
                                Nom
                            </label>
                        </div>

                        {/* Email Field */}
                        <div className="relative my-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="off"
                                placeholder=" "
                                className="peer w-full px-4 py-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-md outline-none focus:border-black focus:ring-0 transition duration-300"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-4 top-3 text-black bg-transparent px-1 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:bg-white peer-focus:text-black"
                            >
                                Email
                            </label>
                        </div>

                        {/* Message Field */}
                        <div className="relative my-4">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="5"
                                placeholder=" "
                                className="peer w-full px-4 py-3 text-gray-900 bg-transparent border-2 border-gray-300 rounded-md outline-none focus:border-black focus:ring-0 transition duration-300"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-4 top-3 text-black bg-transparent px-1 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:bg-white peer-focus:text-black"
                            >
                                Message
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-white bg-black text-white rounded-md hover:opacity-60 transition duration-300"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
