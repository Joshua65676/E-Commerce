import React from "react";
import { IconMinus, IconPlus } from "@/assets";
import Image from "next/image";

interface CounterProps {
  count: number;
  onCountChange: (count: number) => void;
}
const Counter: React.FC<CounterProps> = ({ onCountChange, count }) => {

  const increment = () => {
    const newCount = count + 1;
    onCountChange(newCount);
  };
  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      onCountChange(newCount);
    }
  };

  return (
    <>
      <div className="rounded-lg bg-LightGrayishBlue border-none hover:bg-LightGrayishBlue h-12 w-32 shadow">
        <div className="flex flex-row gap-7 justify-around pt-3">
          <button onClick={decrement} disabled={count ===  0}>
            <Image src={IconMinus} alt="" />
          </button>
          <div className="font-kumbh font-semibold">{count}</div>
          <button onClick={increment} >
            <Image src={IconPlus} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
