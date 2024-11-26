import React from 'react';
import { useRouter } from 'next/router';

export default function Mosaic() {
    const router = useRouter();

    // Funções de navegação específicas para cada contêiner
    const handlePremiosClick = () => {
        router.push('/Premios');
    };

    const handleChoppDeliveryClick = () => {
        // Rola para a seção com ID 'delivery'
        document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCervejariaClick = () => {
        router.push('/Cervejaria');
    };

    const handleCardapioClick = () => {
        router.push('/Cardapio');
    };

    const handleBrotasBeerClick = () => {
        router.push('/BrotasBeer');
    };

    return (
        <div>
            <section id='about' className=''>
                <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-0">

                    {/* PREMIOS */}


                    {/* A FABRICA */}
                    <div onClick={handleCervejariaClick} className="lg:row-span-2 lg:row-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid3.png" alt="A Fábrica" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">A FÁBRICA</span>
                        </div>
                    </div>

                    {/* CARDAPIO */}
                    <div onClick={handleCardapioClick} className="lg:row-span-2 lg:row-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid4.png" alt="Cardápio" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">CARDÁPIO</span>
                        </div>
                    </div>

                    {/* PUB */}
                    <div onClick={handleBrotasBeerClick} className="lg:col-span-2 lg:row-span-2 lg:row-start-3 relative group cursor-pointer">
                        <img className='w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-75' src="grid5.png" alt="Beers" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">PUB</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
