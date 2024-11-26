import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GaleriaPub from '@/components/subcomponents/GaleriaPub';

import React from 'react';

export default function Cervejaria2() {
  return (
    <>
      <Navbar />
      <section id='pub' className='bannerPub py-60'>
        <div className='maxWidth'>
          <h1 className="font-teko text-7xl mt-4 uppercase text-center lg:tracking-wider lg:text-8xl text-black">Cervejaria 2 - PUB</h1>
        </div>
      </section>

      <div className=' py-10'>
        <h1 className='font-teko text-white  text-7xl text-center uppercase lg:tracking-wider lg:text-8xl '>PUB</h1>
        <img className='mx-auto ' src="slidemain.png" alt="" />
        <GaleriaPub />
      </div>
      <Footer />
    </>
  );
}