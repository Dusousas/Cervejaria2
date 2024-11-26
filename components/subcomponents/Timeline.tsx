import React, { useState } from 'react';

const events = [
    { date: '2006', title: 'Titulo ', description: 'Ainda em 2006, folheando um jornal com uma reportagem sobre fabricação de cervejas caseiras, o então empresário do ramo de informática, Marcio Egea Secafin, tem um insight sobre uma mudança de rumo profissional: deixar os computadores para trás, para se tornar cervejeiro.' },
    { date: '2010', title: 'Titulo 2', description: 'Quatro anos e muitos estudos se passaram. Depois de inúmeros erros e acertos, a primeira produção caseira, feita ainda nos fundos de sua antiga loja de computadores, foi brindada com os amigos mais próximos. Não faltaram críticas. Dava para ver que todo o esforço e aprendizado tinham gerado bons frutos, mas havia muito a melhorar e profissionalizar.' },
    { date: '2012', title: 'Titulo 3', description: 'Com mais dois anos de estudos e cursos realizados, o sonho começou a se materializar em 2012, quando foi feito o investimento na primeira planta industrial da Brotas Beer. A fábrica, inicialmente com capacidade de 3.000 litros ao mês, servia apenas ao mercado local de Brotas, com ótima aceitação entre brotenses e turistas.Era hora de deixarmos de ser um produto local. Investimos na adequação da marca para um posicionamento mais claro: novos rótulos, novo slogan (CERVEJA COM CLASSE, MAS NEM TANTO), tudo para falarmos da qualidade de nossas cervejas, mas com toda a leveza e o bom humor pertencentes à nossa alma.' },
    { date: '2013', title: 'Titulo 4', description: 'No final de 2013, a cervejaria ganha um sócio, Eduardo Camillo, permitindo investimentos na troca de toda planta, que teve a sua capacidade expandida para até 30.000 litros/mês.' },
    { date: '2014', title: 'Titulos', description: 'Após a expansão da cervejaria, conquistamos nosso primeiro reconhecimento nacional: três prêmios no Festival Brasileiro de Cerveja, incluindo uma medalha pelo novo rótulo das nossas cervejas.' },
    { date: '2016', title: 'Titulos', description: 'Outro sonho é realizado em agosto de 2016. A cervejaria abre as portas do Brotas Beer Pub. Um pub anexo à fábrica no qual recebemos nossos amigos e clientes de Brotas e região, sendo mais uma opção para os turistas que visitam a cidade.' },
    { date: '2017', title: 'Titulos', description: 'Este ano foi um ano de reconhecimento por todo o nosso trabalho. Recebemos, ao todo, 8 prêmios internacionais nas principais competições do cenário cervejeiro. E a Brotas Beer Schwarzbier entrou para o ranking das cervejas mais premiadas do país.' },
    { date: '2020', title: 'Titulos', description: 'Inauguramos a extensão do PUB, nosso TAP ROOM, em uma área integrada à fábrica com mais 6 torneiras no sistema MYTAP.' },
    { date: '2021', title: 'Titulos', description: 'Abrimos a segunda extensão do PUB, nosso TAP GARDEN, em uma área ao ar livre, com mais 4 torneiras no sistema MYTAP' },
];

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='bewwery' className="background_h1 flex flex-col items-center justify-center py-20">  
            <p className="font-delius text-black text-2xl text-center lg:text-2xl">Passos que Moldaram Nossa História</p>
            <h1 className='text-black text-6xl font-teko uppercase lg:tracking-wider'>Timeline</h1>
            <img src="slidegreen.png" alt="" />

            {/* Timeline */}
            <div className="flex flex-col items-center justify-center w-full py-20  lg:flex-row">
                {events.map((event, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`cursor-pointer flex flex-col items-center w-full ml-0 transition-all duration-300 ${activeIndex >= index ? 'text-textGreen' : 'text-textGray'
                            }`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2  transition-colors duration-300 ${activeIndex >= index ? 'bg-textGreen border-textGreen text-white' : 'border-gray-300'
                                }`}
                        />
                        <p className="mt-2 font-semibold">{event.date}</p>
                    </div>
                ))}
            </div>

            {/* Linha Conectiva */}
            <div className="w-full h-1 bg-gray-300 my-5 relative">
                <div className="absolute h-1 bg-textGreen transition-all duration-300" style={{ width: `${(activeIndex / (events.length - 1)) * 100}%` }}></div>
            </div>
            {/* Conteúdo do Evento */}
            <div className="text-center max-w-[1400px] h-[200px] flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-textGreen">{events[activeIndex].title}</h2>
                <p className="mt-4 text-gray-600">{events[activeIndex].description}</p>
            </div>
        </div>
    );
}
