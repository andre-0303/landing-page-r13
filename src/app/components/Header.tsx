'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const links = [
        { label: "Início", href: "#inicio" },
        { label: "História", href: "#historia" },
        { label: "Propostas", href: "#propostas" },
        { label: "Contatos", href: "#contatos" },
    ];

    return (
        <>
            <header className="bg-red-600 flex justify-around items-center px-6 h-[100px] w-full">
                <a href="#" className="text-white font-extrabold text-5xl">R13</a>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex flex-row gap-6 text-white">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="group relative w-max inline-block"
                                >
                                    <span>{link.label}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    onClick={toggleMenu}
                    className="text-white text-4xl md:hidden"
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </header>

            {/* Sidebar Mobile Menu (Right Side) */}
            {menuOpen && (
                <div className="fixed top-0 right-0 w-2/3 h-full bg-red-700 z-50 p-6 flex flex-col gap-6 transition-all duration-300 ease-in-out transform translate-x-0">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl self-end"
                        aria-label="Fechar menu"
                    >
                        <HiX />
                    </button>
                    <ul className="flex flex-col gap-6 mt-10 text-white text-lg">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="block w-max group relative"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span>{link.label}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Content shift for mobile menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
            )}
        </>
    );
}
