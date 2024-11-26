import React from 'react';

export default function GaleriaCardapio() {
    return (
        <div>
            <section id='pub' className='px-[2%] py-20'>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto">
                    <div className="col-span-1 sm:col-span-2"><img className='h-[371px] object-cover w-full' src="galeriafabrica/1.jpg" alt="" /></div>

                    <div className="col-span-1"><img className='h-[371px] object-cover w-full' src="galeriafabrica/2.jpg" alt="" /></div>

                    <div className="col-span-1 sm:col-span-2 lg:col-span-2"><img className='h-[371px] object-cover w-full' src="galeriafabrica/3.jpg" alt="" /></div>

                    <div className="col-span-1"><img className='h-[371px] object-cover w-full' src="galeriafabrica/4.jpg" alt="" /></div>

                    <div className="col-span-1 sm:col-span-2"><img className='h-[371px] object-cover w-full' src="galeriafabrica/5.jpg" alt="" /></div>

                    <div className="col-span-1"><img className='h-[371px] object-cover w-full' src="galeriafabrica/6.jpg" alt="" /></div>

                    <div className="col-span-1"><img className='h-[371px] object-cover w-full' src="galeriafabrica/7.jpg" alt="" /></div>

                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2"><img className='h-[371px] object-cover w-full' src="galeriafabrica/8.jpg" alt="" /></div>

                    <div className="col-span-1 row-span-2"><img className='h-[371px] object-cover w-full' src="galeriafabrica/9.jpg" alt="" /></div>

                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2"><img className='h-[371px] object-cover w-full' src="galeriafabrica/10.jpg" alt="" /></div>
                </div>
            </section>
        </div>
    );
}
