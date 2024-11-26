import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim fugit consequuntur, sit, fuga doloribus quaerat veniam accusamus architecto officia suscipit nesciunt aliquam ipsam possimus autem doloremque illum modi rem. Tenetur odio dolores obcaecati, in sit suscipit ratione fugit repudiandae, nihil necessitatibus eius numquam, doloribus dolorum quidem dolor. Enim, dolor. Ipsa!",
        name: "Eduardo Sousa",
        image: "slidegreen.png"
    },
    {
        text: "Segundo depoimento de exemplo. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        name: "Ana Silva",
        image: "slidegreen.png"
    },
    // Adicione mais depoimentos aqui, se necessário
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const { text, name, image } = testimonials[currentIndex];

    return (
        <section id='pub' className='background_h1 py-20'>
            <div className='maxWidth flex items-center justify-center gap-4'>

                {/* Botão para o depoimento anterior */}
                <div className='text-center my-4 cursor-pointer' onClick={handlePrevious}>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="text-black" />
                </div>
                {/* Depoimento atual com altura fixa */}
                <article className="w-full flex flex-col items-center justify-center text-center transition-all duration-500" style={{ minHeight: "400px" }}>
                    <h1 className='text-black text-5xl font-teko mt-4 uppercase'>Depoimentos</h1>
                    <div className='w-full mt-4'>
                        <img className='mx-auto' src={image} alt="Imagem do depoimento" />
                    </div>
                    <p className='text-textGray text-lg text-center mt-4'>{text}</p>
                    <h2 className='text-textGreen text-center font-delius text-2xl mt-8'>{name}</h2>
                </article>
                {/* Botão para o próximo depoimento */}
                <div className='text-center my-4 cursor-pointer' onClick={handleNext}>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="text-black" />
                </div>

            </div>
        </section>
    );
}
