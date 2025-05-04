export default function Header() {
    return (
        <>
            <header className="bg-red-600 flex justify-around items-center max-w-full h-[100px]">
                <a href="#" className="text-white font-extrabold text-5xl">R13</a>
                <nav>
                    <ul className="flex flex-row gap-6 text-white">
                        {["Início", "História", "Propostas", "Contatos"].map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="group relative w-max inline-block"
                                >
                                    <span>{item}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}
