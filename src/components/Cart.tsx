import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/Button";
import { IconDelete } from "@/assets";

interface CartProps {
  image: StaticImageData | null;
  title: string | null;
  count: number;
  onDelete: () => void;
}

const Cart: React.FC<CartProps> = ({ image, title, count, onDelete }) => {
  const price = 125.0;
  const totalCost = (price * count).toFixed(2);
  return (
    <main className="md:w-[20rem] mx:w-[22rem] absolute md:right-20 top-24 bg-White shadow-xl md:h-60 mx:h-80 md:rounded-b-lg mx:rounded-lg mx:z-10">
      <section>
        <div className="p-3 pl-4 pb-3">
          <span className="text-[16px] font-kumbh font-semibold">Cart</span>
        </div>
        <div className="">
          <hr className="" />
        </div>
        {image && title ? (
          <div className="flex flex-col gap-4 py-3">
            <div className="flex flex-row items-center p-4 gap-3">
              <Image
                src={image}
                alt={title}
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className=" p-2 flex flex-col">
                <h2 className="text-[14px] font-kumbh text-GrayishBlue">{title}</h2>
                <div className="flex flex-row gap-2 text-GrayishBlue">
                  <p className="text-[14px] font-kumbh">${price.toFixed(2)}</p>
                  <span className="">*</span>
                  <p className="text-[14px] font-kumbh"> {count}</p>
                  <p className="text-[14px] font-kumbh font-bold text-Black">
                    ${totalCost}
                  </p>
                </div>
              </div>{" "}
              <button onClick={onDelete}>
                <Image src={IconDelete} alt="Delete Button" />
              </button>
            </div>
            <div className=" flex justify-center">
              <Button className="bg-Orange border-Orange w-11/12 rounded-xl hover:bg-BgOrange">
                <div className="flex flex-row gap-5">
                  <span className="text-Black font-bold  font-kumbh text-base">
                    Checkout
                  </span>
                </div>
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center pt-20">
            <p className="text-[14px] font-kumbh">Your cart is empty.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Cart;
