import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Form from './subcomponents/Form';

export default function Contact() {
    return (
        <>
            <section id='contact' className='background_h1 py-20'>
                <div className='maxWidth flex flex-col gap-20 lg:flex-row'>

                    <article className='w-full lg:w-1/2'>
                        <h1 className='text-black text-5xl font-teko uppercase text-center mt-2 lg:text-left'>Onde nos encontrar</h1>
                        <img className='mx-auto lg:mx-0' src="slidegreen.png" alt="" />
                        <p className='text-textGray mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorpe leo, eget euismod orci cum sociis llamcorpe leo</p>
                        <h1 className='text-black text-3xl font-teko uppercase text-center mt-8 lg:text-left'>Nossa localização</h1>
                        <p className='text-textGray flex gap-2 items-center mt-2'>
                            <FontAwesomeIcon className='text-textGreen text-lg' icon={faLocationDot} />Av. Dr. Gofredo Schilini, 1554</p>
                        <p className='text-textGray flex gap-2 items-center mt-2'>
                            <FontAwesomeIcon className='text-textGreen text-lg' icon={faPhone} />+55 (14) 3655-1101</p>
                        <p className='text-textGray flex gap-2 items-center mt-2'>
                            <FontAwesomeIcon className='text-textGreen text-lg' icon={faEnvelope} />contato@cervejaria2.com.br</p>
                    </article>

                    <article className='w-full lg:w-1/2'>
                        <Form />
                    </article>

                </div>
            </section>
        </>
    );
}