import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Importa o tipo de Swiper para definir o tipo da referência
import { Swiper as SwiperType, NavigationOptions } from 'swiper/types';

export default function SlideBeers() {
    // Define o tipo de swiperRef como SwiperType
    const swiperRef = useRef<SwiperType | null>(null);
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params.navigation) {
            const navigation = swiperRef.current.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div>
            <section id='beers' className='flex items-center gap-2'>
                {/* Botão de navegação esquerda */}
                <div ref={prevRef} className='text-center my-4 cursor-pointer'>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-black" />
                </div>

                <Swiper
                    onInit={(swiper) => {
                        swiperRef.current = swiper; // Atribui o swiper à referência após a inicialização
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={ false } // Define a navegação como um objeto
                    modules={[Navigation]}
                    breakpoints={{
                        1024: { // A partir do breakpoint lg
                            slidesPerView: 2,
                        },
                    }}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <article className='flex items-center'>
                            <div className='w-[60%]'>
                                <img className='w-full' src="beers_h1.png" alt="Pilsen" />
                            </div>
                            <div>
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>Cerveja 1<span className='text-xl font-light ml-4'>4.7% alcool</span></h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis a dolorem labore nobis amet mollitia quaerat dolor voluptas exercitationem.</p>
                                <h2 className='text-xl text-black font-teko mt-2'>15 IBUs amargor</h2>

                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <article className='flex items-center'>
                            <div className='w-[60%]'>
                                <img className='w-full' src="beers_h1.png" alt="Weissbier" />
                            </div>
                            <div>
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>Cerveja 2<span className='text-xl font-light ml-4'>4.3% alcool</span></h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis dolorem aspernatur quasi, nostrum fugit tempore! Perspiciatis quo maiores eligendi quasi quibusdam eaque assumenda consequuntur saepe. Ratione nam saepe nobis sequi, deserunt in repellat officiis veniam sapiente totam? Dolor, et.
                                </p>
                                <h2 className='text-xl text-black font-teko mt-2'>13 IBUs amargor</h2>

                            </div>
                        </article>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <article className='flex items-center'>
                            <div className='w-[60%]'>
                                <img className='w-full' src="beers_h1.png" alt="Red Ale" />
                            </div>
                            <div>
                                <h1 className='text-black font-teko font-semibold uppercase text-2xl'>Cerveja 3<span className='text-xl font-light ml-4'>5.0% alcool</span></h1>
                                <div className='mt-2'>
                                    <img src="slidegreen.png" alt="Decorative line" />
                                </div>
                                <p className='max-w-[350px] text-textGray mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus mollitia, dolorum itaque reiciendis iste pariatur laudantium ex vitae, odit ullam sequi? Quibusdam, quas? Debitis delectus magnam architecto dolorum aut.
                                </p>
                                <h2 className='text-xl text-black font-teko mt-2'>25 IBUs amargor</h2>

                            </div>
                        </article>
                    </SwiperSlide>
                </Swiper>

                {/* Botão de navegação direita */}
                <div ref={nextRef} className='text-center my-4 cursor-pointer'>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="text-black" />
                </div>
            </section>
        </div>
    );
}
