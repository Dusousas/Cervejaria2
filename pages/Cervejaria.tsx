import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GaleriaFabrica from '@/components/subcomponents/GaleriaFabrica';
import Timeline from '@/components/subcomponents/Timeline';
import React from 'react';

export default function cervejaria() {
  return (
    <>

      <Navbar />
      <section id='about' className='bannerPub py-60'>
        <div className='maxWidth '>
          <h1 className="font-teko text-7xl mt-4 uppercase text-center lg:tracking-wider lg:text-8xl text-black">Cervejaria 2 - Fábrica</h1>
        </div>
      </section>

      <div id='about' className='relative top-[59px]'>
        <Timeline />
      </div>

      {/* TIMELINE */}
      <div id='about' className='relative top-[59px]'>
        <h1 className='font-teko text-white  text-7xl text-center uppercase lg:tracking-wider lg:text-8xl pt-20'>Nossa fábrica</h1>
        <img className='mx-auto ' src="slidemain.png" alt="" />
        <GaleriaFabrica />
      </div>

      <Footer />
    </>
  );
}