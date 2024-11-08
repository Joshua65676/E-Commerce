"use client";
import React, { useState } from "react";
import { IconMinus, IconPlus } from "@/assets";
import Image from "next/image";
import { Button } from "./ui/Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <Button className="rounded-lg bg-LightGrayishBlue border-none hover:bg-LightGrayishBlue">
        <div className="flex flex-row gap-7 justify-between">
          <button onClick={decrement}>
            <Image src={IconMinus} alt="" />
          </button>
          <div>{count}</div>
          <button onClick={increment}>
            <Image src={IconPlus} alt="" />
          </button>
        </div>
      </Button>
    </>
  );
};

export default Counter;
