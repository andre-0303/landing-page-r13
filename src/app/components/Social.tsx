'use client';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Social() {
    return (
        <section id="social" className="bg-orange-500 text-center text-red-700 py-8">
            <h1 className="text-xl font-semibold mb-4">
                Siga nosso prefeito em todas as redes sociais!
            </h1>
            <div className="flex justify-center gap-6">
                <a
                    href="https://www.facebook.com/RonilsonOliveira40/?locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transition-all duration-300 hover:text-red-700 hover:-translate-y-1"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.instagram.com/ronilsonfranciscoce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transition-all duration-300 hover:text-red-700 hover:-translate-y-1"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transition-all duration-300 hover:text-red-700 hover:-translate-y-1"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=inD2UxQ9LmI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transition-all duration-300 hover:text-red-700 hover:-translate-y-1"
                >
                    <FaYoutube />
                </a>
            </div>
        </section>
    );
}
