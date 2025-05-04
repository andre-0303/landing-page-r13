'use client';

import Image from "next/image";

const propostas = [
    { src: "/ambiente.png", alt: "Ambiente" },
    { src: "/cultura.png", alt: "Cultura" },
    { src: "/desenvolvimento_eco.png", alt: "Desenvolvimento Econômico" },
    { src: "/educacao.png", alt: "Educação" },
    { src: "/esporte.png", alt: "Esporte" },
    { src: "/infra.png", alt: "Infraestrutura" },
];

export default function Propostas() {
    return (
        <section id="propostas" className="bg-red-600 w-full px-6 py-12">
            <h1 className="text-white text-center text-3xl font-extrabold mb-10">
                Propostas do Ronilson
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {propostas.map((item, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl cursor-pointer shadow-lg transition-transform duration-500 hover:-translate-y-2"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={400}
                            height={250}
                            className="rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
