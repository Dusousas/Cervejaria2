import React from "react";
import { useRouter } from 'next/router';
import CardsAbout from "./subcomponents/CardsAbout";

export default function About() {
  const router = useRouter();

  const handleClick = () => {
      router.push('/Cervejaria2');
  };
  return (
    <div>
      <section id="about" className="background_h1 py-20">
        <div className="maxWidth lg:flex">

          <article className="lg:w-[40%]">
            <p className="text-textGreen font-delius text-center text-2xl lg:text-left">
              Pub favorito da cidade!
            </p>
            <h1 className="text-black text-5xl font-teko mt-4 uppercase text-center lg:text-left ">
              Gastronomia de qualidade e cervejas incríveis
            </h1>
            <div className="w-full">
            <img
                className="mx-auto lg:mx-0 mt-4"
                src="slidegreen.png"
                alt=""
              />
            </div>

            <div className="mx-auto text-center mt-6 lg:text-left">
              <button onClick={handleClick} className="font-teko uppercase bg-black text-white pt-4 pb-[13px] px-8">Saiba mais</button>
            </div>
          </article>

          <article className="flex flex-col mt-10 gap-y-6 lg:flex-row lg:w-[60%] lg:justify-center lg:items-center lg:mt-0 lg:flex-wrap lg:gap-6 lg:gap-y-0">
            <CardsAbout />
          </article>

        </div>
      </section>

    </div>
  );
}
