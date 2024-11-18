import Image, { StaticImageData } from "next/image";
import React from "react";

interface CartProps {
  image: StaticImageData | null;
  title: string | null;
  count: number;
}

const Cart: React.FC<CartProps> = ({ image, title, count }) => {
  return (
    <main className="w-[20rem] absolute right-20 top-24 bg-White shadow-xl h-48 rounded-b-lg">
      <section>
        <div className="p-3 pl-4 pb-3">
          <span className="text-[16px] font-kumbh font-semibold">Cart</span>
        </div>
        <div className="">
          <hr className="" />
        </div>
        {image && title ? (
          <div className="flex flex-row items-center p-4">
            <Image
              src={image}
              alt={title}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-[14px] font-kumbh">{title}</h2>
              <p className="text-[14px] font-kumbh">Count: {count}</p>
            </div>{" "}
          </div>
        ) : (
          <div className="text-center pt-12">
            <p className="text-[14px] font-kumbh">Your cart is empty.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
