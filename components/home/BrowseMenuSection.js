'use client';
import Button from '../ui/Button';
import ListProducts from '../ListProducts';
import Link from 'next/link';

export default function BrowseMenuSection() {
  return (
    <section className="w-full mx-auto my-14 bg-bg-content">
      <div className="lg:w-5/12 w-full mx-auto">
        <h1 className="md:text-[55px] text-5xl text-primary font-bold text-center ">Explorez notre menu</h1>
        <p className="text-lg leading-normal text-paragraph text-center py-3">
          Parcourez notre menu pour commander en ligne, ou{' '}
          <a href="#" className="text-primary underline underline-offset-4">
            appelez
          </a>{' '}
          notre restaurant pour une commande à emporter. Des plats frais et savoureux, prêts rapidement.
        </p>

      </div>
      <ListProducts />
      <div className="w-full flex justify-center lg:pt-14 pt-10">
        <Link href="/order#products">
          <Button className="bg-primary bg-button-wave text-white">Voir Plus</Button>
        </Link>
      </div>
    </section>
  );
}
