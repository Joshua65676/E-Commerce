"use client";
import { useState } from "react";
import Details from "@/components/Details";
import NavBar from "@/components/NavBar";
import { StaticImageData } from "next/image";
import { Product1 } from "@/assets"
export default function Home() {
  const [cartItem, setCartItem] = useState<{
    image: StaticImageData;
    title: string;
    count: number;
  } | null>(null);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    Product1
  );
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCartItem({
      image: selectedImage,
      title: "Fall Limited Edition Sneakers",
      count
    });
  };

  const handleDeleteCart = () => {
    setCount(0);
    setCartItem(null);
  };

  return (
    <main className="container max-w-[75rem] mx-auto w-full overflow-hidden">
      <nav className="">
        <NavBar cartItem={cartItem} count={count} onDeleteCart={handleDeleteCart} />
      </nav>
      <section className="">
        <div className="">
          <Details
            handleAddToCart={handleAddToCart}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            count={count}
            setCount={setCount}
          />
        </div>
      </section>
    </main>
  );
}
