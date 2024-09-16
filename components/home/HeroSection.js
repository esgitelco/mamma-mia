'use client';
import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import trustPilot from '../../public/logo/trustpilot-logo.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white flex flex-col lg:flex-row w-full mt-32 mb-32 md:mb-32 items-center justify-between gap-10">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col lg:items-start items-center lg:w-6/12 md:w-10/12 w-full lg:space-y-5 space-y-7">
        <h1 className="font-bold md:text-6xl text-5xl lg:text-left text-center">
        Des plats délicieux & à emporter, <span className="text-primary">livrés</span> chez vous.
        </h1>
        <p className="text-paragraph text-lg lg:text-base lg:text-left text-center leading-snug">
        Découvrez une expérience culinaire inoubliable ! Notre restaurant vous propose une ambiance chaleureuse et
        conviviale, où chaque plat est préparé avec soin pour ravir vos papilles.
        </p>
        <Link href="/order">
          <Button className="bg-button-wave bg-primary text-white">Passer une Commande</Button>
        </Link>
        <div className="mx-auto lg:mx-0">
          <Image src={trustPilot} quality={60} alt="trust Pilot logo" className="mb-2 lg:mx-0 mx-auto" />
          <p className="text-heading">
            <span className="text-primary pl-1">4.8 sur 5</span> de 2000+ revues
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Image
          src="/img/image-hero.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-tl-[96px] rounded-bl-3xl rounded-r-lg "
        />
      </motion.div>
    </section>
  );
}
