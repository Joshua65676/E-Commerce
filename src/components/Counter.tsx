"use client";
import React, { useState } from "react";
import { IconMinus, IconPlus } from "@/assets";
import Image from "next/image";
// import { Button } from "./ui/Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));

  return (
    <>
      <div className="rounded-lg bg-LightGrayishBlue border-none hover:bg-LightGrayishBlue h-12 w-32 shadow">
        <div className="flex flex-row gap-7 justify-around pt-3">
          <button onClick={decrement}>
            <Image src={IconMinus} alt="" />
          </button>
          <div>{count}</div>
          <button onClick={increment}>
            <Image src={IconPlus} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
