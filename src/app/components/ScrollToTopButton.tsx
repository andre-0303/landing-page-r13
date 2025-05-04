'use client';

import { useEffect, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200); // Mostra depois de rolar 200px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        show && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all z-50"
                aria-label="Voltar ao topo"
            >
                <HiArrowUp className="text-xl" />
            </button>
        )
    );
}
