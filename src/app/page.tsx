"use client";
import { useState } from "react";
import HomePage from "@/components/Home";
import NavBar from "@/components/NavBar";
import MenuBar from "@/components/SideBar";
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
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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

  const handleMenuClick = () => {
    setIsMenuVisible(true);
  };
  const handleMenuClose = () => {
    setIsMenuVisible(false);
  };

  return (
    <main className="container max-w-[75rem] mx-auto w-full overflow-hidden">
      <nav className="">
        {isMenuVisible && <MenuBar onClose={handleMenuClose}/>}
        <NavBar cartItem={cartItem} count={count} onDeleteCart={handleDeleteCart} onMenuClick={handleMenuClick} />
      </nav>
      <section className="">
        <div className="">
          <HomePage
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
