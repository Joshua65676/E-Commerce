"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Counter from "./Counter";
import AddCart from "./AddCart";
import Images from "./Images";
import FullImage from "./FullImage";
import Details from "./Details";
import { StaticImageData } from "next/image";

interface DetailsProps {
  handleAddToCart: () => void;
  selectedImage: StaticImageData;
  setSelectedImage: (image: StaticImageData) => void;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
const HomePage: React.FC<DetailsProps> = ({
  handleAddToCart,
  setSelectedImage,
  count,
  setCount,
}) => {
  const [isFullImageVisible, setIsFullImageVisible] = useState(false);

  const handleImageClick = () => {
    setIsFullImageVisible(true);
  };
  const handleCloseFullImage = () => {
    setIsFullImageVisible(false);
  };

  return (
    <main className="md:container max-w-7xl mx-auto w-full md:justify-between items-center md:py-14 p-5 md:gap-40 md:ml-8 md:flex md:flex-row mx:flex mx:flex-col mx:gap-8 mx:ml-0">
      <div className="mx:w-screen md:w-10/12">
        <Images
          onSelectImage={setSelectedImage}
          onImageClick={handleImageClick}
        />
      </div>

      <section className="flex flex-col gap-8 md:pb-8 mx:pb-5 mx:w-[90vw]">
        <Details />

        <div className="flex md:flex-row md:gap-8 mx:flex-col mx:gap-8">
          <div>
            <Counter count={count} onCountChange={setCount} />
          </div>
          <div>
            <AddCart onAddToCart={handleAddToCart} />
          </div>
        </div>
      </section>
      {isFullImageVisible && <FullImage onClose={handleCloseFullImage}/>}
    </main>
  );
};

export default HomePage;
