import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const FaqSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-10 my-32 items-center">
      <div className="lg:w-6/12 w-full flex justify-center faq-pattern relative">
        <Image
          src="/img/faq-section.png"
          quality={60}
          alt="FAQ Image"
          width={450}
          height={450}
          className="object-cover"
        />
      </div>
      <div className="lg:w-5/12 md:w-8/12 w-full flex flex-col lg:items-start items-center">
        <h1 className="text-primary text-5xl text-center lg:text-left font-bold my-5">
          Commandez et payez en ligne facilement.
        </h1>
        <p className="text-paragraph text-lg leading-normal lg:text-left text-center">
          Vous vous demandez si vous pouvez passer une commande et payer en ligne ? C’est simple ! Notre site vous permet de finaliser votre commande et de régler en toute sécurité, le tout en quelques clics.
          Explorez nos questions fréquemment posées pour en savoir plus.
        </p>
        <Link href="/faq">
          <Button className="bg-button-wave mt-10 bg-primary text-white">Voir les FAQs</Button>
        </Link>
      </div>
    </section>
  );
};

export default FaqSection;
