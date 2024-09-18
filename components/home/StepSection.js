import Image from 'next/image';
import React from 'react';

export default function StepSection() {
  const step = [
    {
      src: '/img/step/step-01.png',
      title: 'Commandez en ligne',
      text: 'Passez votre commande directement via notre site web en quelques clics.',
    },
    {
      src: '/img/step/step-02.png',
      title: 'Ajoutez au panier & payez',
      text: 'Ajoutez vos articles au panier et réglez facilement en ligne via notre système sécurisé.',
    },
    {
      src: '/img/step/step-03.png',
      title: 'Livraison rapide',
      text: 'Recevez votre commande rapidement à votre porte, ou récupérez-la en magasin.',
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="w-full mx-auto my-10">
        <h1 className="text-center md:text-[55px] text-[42px] text-primary font-bold">Comment ça marche.</h1>
      </div>
      <div className="flex justify-center lg:gap-16 md:gap-10 gap-20 lg:flex-row flex-col items-center">
        {step.map(({ src, title, text }) => {
          return (
            <div key={title} className="flex lg:w-3/12 md:w-10/12 w-full flex-col items-center">
              <Image src={src} alt="Step 1" quality={60} width={350} height={350} className="w-auto h-auto" />
              <div className="w-11/12 lg:w-full md:w-8/12">
                <h2 className="font-bold my-3 text-[22px] text-heading text-center">{title}</h2>
                <p className="text-paragraph mx-auto text-lg leading-normal text-center">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
