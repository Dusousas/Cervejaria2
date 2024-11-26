import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideBeers from './subcomponents/SlideBeers';

export default function Beers() {
  return (
    <div>
      <section id='beers' className='py-20 background_h1'>
        <div className='maxWidth'>
          <SlideBeers />
        </div>
      </section>

      <section id='beers' className='background_beers flex justify-center py-20'>
        <div>
          <img src="client1.png" alt="" />
        </div>
        <div>
          <img src="client2.png" alt="" />
        </div>
        <div>
          <img src="client3.png" alt="" />
        </div>
        <div>
          <img src="client4.png" alt="" />
        </div>
        <div>
          <img src="client5.png" alt="" />
        </div>
      </section>
    </div>
  );
}
