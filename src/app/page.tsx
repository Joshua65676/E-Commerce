"use client"
import { useState } from "react";
import Images from "@/components/Images";
import Details from "@/components/Details";
import NavBar from "@/components/NavBar";
export default function Home() {
  const [cartMessage, setCartMessage] = useState("Your cart is empty");

  const handleAddToCart = () => {
    setCartMessage("Add cart button is clicked");
  };

  return (
    <main className="container max-w-[75rem] mx-auto w-full">
      <nav className="">
        <NavBar cartMessage={cartMessage}/>
      </nav>
      <section className="flex w-full justify-between items-center py-20 gap-40 ml-8">
        <div className="">
          <Images />
        </div>
        <div className="">
          <Details handleAddToCart={handleAddToCart} cartMessage={cartMessage}/>
        </div>
      </section>
    </main>
  );
}
