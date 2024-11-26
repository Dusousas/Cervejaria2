import React from 'react';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Pub() {
  const router = useRouter();

  const handleClick = () => {
      router.push('/BrotasBeer');
  };
  return (
    <>
      <section id='pub' className='background_pub py-20'>
        <div className='mx-auto px-[4%] flex flex-col items-center gap-6 max-w-[1400px] lg:flex-row lg:px-0'>

          <article className='background_pub_2 bg-white outline outline-textGreen outline-8 py-32 px-10 lg:w-1/2 '>
            <div className=''>
              <h1 className='text-black text-5xl font-teko mt-4 uppercase text-center'>Nossa história</h1>
              <div><img className='mx-auto my-4' src="slidegreen.png" alt="" /></div>
              <p className='text-center text-textGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa libero, nostrum iusto magnam voluptas, sint illo aspernatur laboriosam molestiae error aliquid unde odio voluptates? Cum amet similique exercitationem aut, accusantium nulla vel sed hic? Iusto voluptates commodi in amet?</p>

              <div className='flex items-center justify-center gap-1'>
                <a onClick={handleClick} className='text-black font-teko text-lg uppercase font-semibold' href="">Saiba mais</a>
                <div className='text-center my-4 cursor-pointer'>
                  <FontAwesomeIcon icon={faArrowRight} size="1x" className="text-black" />
                </div>
              </div>
            </div>
          </article>

          <article className='w-1/2'>
            <div className='flex justify-center'>
              <img className='' src="logo.webp" alt="" />
            </div>
          </article>

        </div>
      </section>
    </>
  );
}