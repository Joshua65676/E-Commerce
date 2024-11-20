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
    <main className="flex w-full justify-between items-center py-14 p-5 gap-40 ml-8">
      <div className="">
        <Images
          onSelectImage={setSelectedImage}
          onImageClick={handleImageClick}
        />
      </div>

      <section className="flex flex-col gap-8 pb-8">
        <Details />

        <div className="flex flex-row gap-8">
          <div>
            <Counter count={count} onCountChange={setCount} />
          </div>
          <div>
            <AddCart onAddToCart={handleAddToCart} />
          </div>
        </div>
      </section>
      {isFullImageVisible && <FullImage onClose={handleCloseFullImage} />}
    </main>
  );
};

export default HomePage;
