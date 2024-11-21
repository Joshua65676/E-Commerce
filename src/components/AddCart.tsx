import React from "react";
import { Button } from "./ui/Button";
import { IconCart } from "@/assets";
import Image from "next/image";

interface AddCartProps {
  onAddToCart: () => void
}

const AddCart: React.FC<AddCartProps> = ({ onAddToCart }) => {
  return (
    <>
      <Button onClick={onAddToCart} className="bg-Orange border-Orange md:w-56 mx:w-full rounded-xl hover:bg-BgOrange">
        <div className="flex flex-row gap-5">
          <Image src={IconCart} alt="" className="w-5 h-5 filter invert-0"/>
          <span className="text-Black font-bold  font-kumbh text-base">Add to cart</span>
        </div>
      </Button>
    </>
  );
};

export default AddCart;
