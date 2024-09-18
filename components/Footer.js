'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
  return (
    <footer className="w-full bg-alice bg-pattern-footer bg-contain bg-left bg-no-repeat pt-16 lg:px-10 md:px-7 px-2">
      <div className="flex md:flex-row flex-col space-y-10 md:space-x-0 lg:items-center justify-between w-full">
        <div className="md:w-8/12 w-full flex lg:flex-row flex-col gap-10">
          <div className="md:w-6/12 w-full flex flex-col">
            <div className="flex gap-3 items-center justify-start">
              <Image src="/logo/logo.png" alt="Logo Footer" width={40} height={40} priority />
              <h1 className="sm:text-3xl text-xl font-bold text-heading ">
                Mamma <span className="text-primary">Mia!</span>
              </h1>
            </div>
            <p className="text-paragraph text-lg mt-6 md:text-left text-center">
              Welcome to our burger restaurant! We are a diner committed to serving unique and satisfying burgers.
            </p>
          </div>
          {/* <Quotes /> */}
        </div>
        <div className="md:w-4/12 w-full flex md:flex-row flex-col md:gap-24 gap-14 justify-center">
          <FooterList />
        </div>
      </div>
      <div className="w-full border-t mt-24 py-7 flex md:flex-row flex-col items-center justify-between space-y-5">
        <p className="text-paragraph ">
          Dévéloppé par l'équipe{' '}
          <Link href="#" target="_blank" className="text-primary">
            Mamma Mia!
          </Link>{' '}
          · Powered by{' '}
          <Link href="https://nextjs.org/" target="_blank" className="text-primary">
            Next JS
          </Link>
        </p>
        <div className="flex gap-5 justify-center">
          <SosmedIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Quotes = () => {
  const [quotes, setQuotes] = useState({});
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const generateQuotes = () => {
      axios.get('https://api.quotable.io/random').then((res) => {
        setQuotes(res.data);
        setAnimationKey((prevKey) => prevKey + 1);
      });
    };
    generateQuotes();

    const intervalId = setInterval(generateQuotes, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:w-8/12 w-full h-full py-3 px-3 flex items-center flex-col space-y-3 border border-heading/30 rounded shadow-sm">
      <h4 className="text-heading font-bold text-lg">QUOTES RANDOM</h4>
      {Object.keys(quotes).length === 0 ? (
        <i>Loading...</i>
      ) : (
        <>
          <TypeAnimation
            key={animationKey}
            sequence={[`"${quotes.content}"`, 20000]}
            wrapper="blockquote"
            cursor={true}
            repeat={Infinity}
            className="text-center text-lg text-heading"
          />
          <i className="font-light text-lg font-serif text-paragraph">~{quotes.author}~</i>
        </>
      )}
    </div>
  );
};

const FooterList = () => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <h4 className="text-heading font-bold tracking-[0.3em]">MENU</h4>
        <p className="text-paragraph">Acceuil</p>
        <p className="text-paragraph">Réserver</p>
        <p className="text-paragraph">Commande</p>
        <p className="text-paragraph">Contact</p>
      </div>
      <div className="flex flex-col space-y-6">
        <h4 className="text-heading font-bold tracking-[0.3em]">RESTO</h4>
        <p className="text-paragraph">Rejoignez-Nous</p>
        <p className="text-paragraph">Nos Plats</p>
        <p className="text-paragraph">Nos Désserts</p>
      </div>
    </>
  );
};

const SosmedIcon = () => {
  return (
    <>
      <Link
        href="#"
        target="_blank"
        className="border border-paragraph/40 rounded-full p-2 hover:border-paragraph transition-opacity">
        <AiOutlineInstagram className="text-2xl text-paragraph" />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="border border-paragraph/40 rounded-full p-2 hover:border-paragraph transition-opacity">
        <AiOutlineTwitter className="text-2xl text-paragraph" />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="border border-paragraph/40 rounded-full p-2 hover:border-paragraph transition-opacity">
        <AiFillGithub className="text-2xl text-paragraph" />
      </Link>
      <Link
        href="#"
        target="_blank"
        className="border border-paragraph/40 rounded-full p-2 hover:border-paragraph transition-opacity">
        <AiOutlineWhatsApp className="text-2xl text-paragraph" />
      </Link>
    </>
  );
};
