import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GaleriaCardapio from '@/components/subcomponents/GaleriaCardapio';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Cardapio() {
    return (
        <>
            <Navbar />
            <section id='pub' className='bannerPub py-60'>
                <div className='maxWidth '>
                    <h1 className="font-teko text-7xl mt-4 uppercase text-center lg:tracking-wider lg:text-8xl text-white">Cervejaria 2 - Nosso Cardápio</h1>
                </div>
            </section>

            <div className='relative top-[59px] py-20 background_h1'>
                <h1 className='font-teko text-black  text-7xl text-center uppercase lg:tracking-wider lg:text-8xl'>Cardápio</h1>
                <img className='mx-auto ' src="slidegreen.png" alt="" />

                {/* CONTAINER CARDAPIO */}
                <article className='mt-20'>
                    {/* PETISCOS */}
                    <details className="text-center">
                        <summary className="font-teko text-black text-7xl uppercase lg:tracking-wider lg:text-5xl cursor-pointer flex items-center justify-center gap-4">
                            Petiscos
                            <FontAwesomeIcon className='text-lg text-textGreen' icon={faPlus} />
                        </summary>
                        {/* ITEM 1 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Batata Frita</h2>
                            <p className="text-black pb-2">Acompanha molho Ketchup</p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                        {/* ITEM 2 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Batatas Rústicas</h2>
                            <p className="text-black pb-2 max-w-[800px] mx-auto">
                                Batatas cozidas e fritas, com um toque de pimenta do reino e páprica picante, acompanhada de molho sour cream.
                            </p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                    </details>

                    {/* ESPECIAIS */}
                    <details className="text-center mt-8">
                        <summary className="font-teko text-black text-7xl uppercase lg:tracking-wider lg:text-5xl cursor-pointer flex items-center justify-center gap-4">
                            Especiais
                            <FontAwesomeIcon className='text-lg text-textGreen' icon={faPlus} />
                        </summary>
                        {/* ITEM 1 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Costelinha Bbq</h2>
                            <p className="text-black pb-2">Costela suína prime assada lentamente, churrasqueada
                                ao molho barbecue caseiro. Acompanha batata rústica.</p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                        {/* ITEM 2 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Mignon “Do cine São José”</h2>
                            <p className="text-black pb-2 max-w-[800px] mx-auto">
                                Filé mignon com catupiry gratinado. Acompanha pão Frances e vinagrete rústico.
                            </p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                    </details>

                    {/* SANDUBAS */}
                    <details className="text-center mt-8">
                        <summary className="font-teko text-black text-7xl uppercase lg:tracking-wider lg:text-5xl cursor-pointer flex items-center justify-center gap-4">
                            Sandubas
                            <FontAwesomeIcon className='text-lg text-textGreen' icon={faPlus} />
                        </summary>
                        {/* ITEM 1 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Costelinha Bbq</h2>
                            <p className="text-black pb-2">Costela suína prime assada lentamente, churrasqueada
                                ao molho barbecue caseiro. Acompanha batata rústica.</p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                        {/* ITEM 2 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Mignon “Do cine São José”</h2>
                            <p className="text-black pb-2 max-w-[800px] mx-auto">
                                Filé mignon com catupiry gratinado. Acompanha pão Frances e vinagrete rústico.
                            </p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                    </details>

                    {/* SALADAS */}
                    <details className="text-center mt-8">
                        <summary className="font-teko text-black text-7xl uppercase lg:tracking-wider lg:text-5xl cursor-pointer flex items-center justify-center gap-4">
                            Saladas
                            <FontAwesomeIcon className='text-lg text-textGreen' icon={faPlus} />
                        </summary>
                        {/* ITEM 1 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Costelinha Bbq</h2>
                            <p className="text-black pb-2">Costela suína prime assada lentamente, churrasqueada
                                ao molho barbecue caseiro. Acompanha batata rústica.</p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                        {/* ITEM 2 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Mignon “Do cine São José”</h2>
                            <p className="text-black pb-2 max-w-[800px] mx-auto">
                                Filé mignon com catupiry gratinado. Acompanha pão Frances e vinagrete rústico.
                            </p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                    </details>

                    {/* CORDEIRO */}
                    <details className="text-center mt-8">
                        <summary className="font-teko text-black text-7xl uppercase lg:tracking-wider lg:text-5xl cursor-pointer flex items-center justify-center gap-4">
                            Cordeiro
                            <FontAwesomeIcon className='text-lg text-textGreen' icon={faPlus} />
                        </summary>
                        {/* ITEM 1 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Costelinha Bbq</h2>
                            <p className="text-black pb-2">Costela suína prime assada lentamente, churrasqueada
                                ao molho barbecue caseiro. Acompanha batata rústica.</p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                        {/* ITEM 2 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Mignon “Do cine São José”</h2>
                            <p className="text-black pb-2 max-w-[800px] mx-auto">
                                Filé mignon com catupiry gratinado. Acompanha pão Frances e vinagrete rústico.
                            </p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                    </details>

                    {/* SOBREMESAS */}
                    <details className="text-center mt-8">
                        <summary className="font-teko text-black text-7xl uppercase lg:tracking-wider lg:text-5xl cursor-pointer flex items-center justify-center gap-4">
                            Sobremesas
                            <FontAwesomeIcon className='text-lg text-textGreen' icon={faPlus} />
                        </summary>
                        {/* ITEM 1 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Costelinha Bbq</h2>
                            <p className="text-black pb-2">Costela suína prime assada lentamente, churrasqueada
                                ao molho barbecue caseiro. Acompanha batata rústica.</p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                        {/* ITEM 2 */}
                        <div className="mt-4">
                            <h2 className="text-black font-teko text-2xl mt-4 font-semibold">Mignon “Do cine São José”</h2>
                            <p className="text-black pb-2 max-w-[800px] mx-auto">
                                Filé mignon com catupiry gratinado. Acompanha pão Frances e vinagrete rústico.
                            </p>
                            <div className="border-b border-black max-w-[800px] mx-auto" />
                        </div>
                    </details>
                </article>
            </div>
            <div className='relative top-[59px] py-20'>
                <GaleriaCardapio />
            </div>
            <Footer/>
        </>
    );
}