import Image from "next/image";

export default function Main() {
    return (
        <div className="w-full">
            <div className="w-full h-[70vh] relative">
                <Image
                    src="/banner.jpg"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-red-800/40 z-10"></div>
            </div>

            <div id="historia" className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-3xl font-bold text-red-700">Ronilson Oliveira</h2>
                    <h3 className="text-xl font-semibold text-gray-700">Para um futuro melhor, vote no R13</h3>
                    <p className="text-justify text-gray-800 leading-relaxed">
                        Ronilson Francisco de Oliveira, nascido em 28 de março de 1981, é um político brasileiro que atua como prefeito de Croatá, município localizado no estado do Ceará. Casado e com ensino fundamental completo, Ronilson iniciou sua trajetória política com o objetivo de promover o desenvolvimento de sua cidade natal.
                    </p>
                    <p className="text-justify text-gray-800 leading-relaxed">
                        Em 2020, aos 39 anos, foi eleito prefeito de Croatá pelo Movimento Democrático Brasileiro (MDB), obtendo 52,64% dos votos válidos. Durante seu primeiro mandato, focou em educação, saúde, infraestrutura e meio ambiente, com políticas voltadas à qualidade de vida dos cidadãos croataenses.
                    </p>
                    <p className="text-justify text-gray-800 leading-relaxed">
                        A gestão contou com obras como uma nova UBS e uma escola, além de pavimentações ligando a sede ao distrito de Barra do Sotero. Com forte presença nas redes sociais, Ronilson mantém a população informada sobre suas ações.
                    </p>
                    <p className="text-justify text-gray-800 leading-relaxed">
                        Em 2024, foi reeleito pelo Partido dos Trabalhadores (PT) com 87,65% dos votos. O segundo mandato começou em 2025 com o compromisso de continuidade e novas iniciativas sustentáveis.
                    </p>
                    <p className="text-justify text-gray-800 leading-relaxed">
                        Ronilson se destaca pela transparência, participação popular e gestão eficiente, sempre buscando o bem-estar coletivo da população de Croatá.
                    </p>
                </div>

                <div className="md:w-1/3 flex justify-center items-center">
                    <div className="flex justify-center w-full">
                        <Image
                            src="/logo-removebg-preview.png"
                            alt="Logo Ronilson"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
