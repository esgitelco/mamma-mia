import Link from 'next/link';

export default function Banner() {
  return (
    <div className="w-full hidden lg:block fixed z-40 top-0 bg-banner-wave mx-auto py-1 bg-primary">
      <p className="text-white text-center">
      Nous sommes ouverts et prêts à prendre vos réservations !{' '}
        <Link href="/reserver" className="underline underline-offset-4 font-semibold">
          Réserver votre Table
        </Link>
      </p>
    </div>
  );
}
