import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ProductContext } from '@/context/GlobalState';
import { formatRp } from '@/context/formatRp';

export default function FoodCard({ type }) {
  const { products, addToCart } = ProductContext();

  let foods = [];

  if (type === 'burger') {
    foods = products.burgers;
  } else if (type === 'sides') {
    foods = products.sides;
  } else if (type === 'drinks') {
    foods = products.drinks;
  }

  return (
    <>
      {foods.map((item) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-center bg-white rounded-md lg:w-[45%] md:w-10/12 sm:w-[48%] w-full p-5 md:space-x-5 space-y-10 md:space-y-0 border border-[#35b8be]/20 hover:border-[#35b8be] shadow-sm">
            <div className="shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                quality={60}
                className="rounded-lg lg:w-28 lg:h-auto md:w-32 md:h-auto w-auto h-auto aspect-square object-cover"
              />
            </div>
            <div className="flex flex-col md:gap-1 gap-3 justify-start">
              <div className="flex justify-between flex-col md:flex-row">
                <h2 className="text-xl font-bold capitalize">{item.name}</h2>
                <p className="text-primary">{formatRp(item.price)}</p>
              </div>
              <p className="text-paragraf leading-normal line-clamp-3">{item.description}</p>
              <div className="flex mt-2 w-full justify-end">
                <button
                  className="py-2 rounded text-sm text-white px-4 bg-primary shadow-sm hover:contrast-125 transition-all duration-300"
                  onClick={() => addToCart(item.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
