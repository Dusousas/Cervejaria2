import React from 'react';
import { useRouter } from 'next/router';

export default function Brewery() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/Cervejaria');
    };

    return (
        <>
            <section id='about' className='background_h2 py-20'>
                <div className='maxWidth'>
                    <h1 className='font-teko text-black text-7xl text-center uppercase lg:tracking-wider lg:text-8xl'>Conheça nossa fábrica</h1>
                    <p className='text-black text-center'>Produzimos cervejas artesanais desde 2010 na cidade de Brotas, no centro do estado de São Paulo; terra das águas e do turismo de aventura. Uma cervejaria consolidada e em franca expansão, com 14 rótulos próprios, produzidos por nosso experiente time em uma moderna planta de 2000 m2. A qualidade de nossas cervejas é reconhecida nacional e internacionalmente, com 34 medalhas recebidas em diversos concursos ao redor do mundo.</p>
                    {/* CONTAINER */}
                    <article className='flex flex-col mt-10 justify-center gap-8 lg:flex-row'>
                        {/* CONTAINER SOLO */}
                        <div className='flex flex-col items-center outline outline-black py-8 px-10 rounded-lg '>
                            <h1 className='text-black font-teko text-6xl font-semibold'>10</h1>
                            <p className='text-black font-semibold'>Anos de experiencia</p>
                        </div>

                        <div className='flex flex-col items-center outline outline-black py-8 px-10 rounded-lg '>
                            <h1 className='text-black font-teko text-6xl font-semibold'>10</h1>
                            <p className='text-black font-semibold'>Anos de experiencia</p>
                        </div>                        <div className='flex flex-col items-center outline outline-black py-8 px-10 rounded-lg '>
                            <h1 className='text-black font-teko text-6xl font-semibold'>10</h1>
                            <p className='text-black font-semibold'>Anos de experiencia</p>
                        </div>                        <div className='flex flex-col items-center outline outline-black py-8 px-10 rounded-lg '>
                            <h1 className='text-black font-teko text-6xl font-semibold'>10</h1>
                            <p className='text-black font-semibold'>Anos de experiencia</p>
                        </div>

                    </article>
                    <div className="mx-auto text-center mt-10">
                        <button onClick={handleClick} className="font-teko uppercase bg-black text-white pt-4 pb-[13px] px-8">Saiba mais</button>
                    </div>
                </div>
            </section>
        </>
    );
}
