"use client";
import React, { useState } from "react";
import { ThumbnailImgs } from "@/constants";
import Image from "next/image";
import { IconClose, IconNext, IconPrevious } from "@/assets";

interface FullImageProps {
  onClose: () => void;
}

const FullImage: React.FC<FullImageProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const selectedImage = ThumbnailImgs[currentIndex].productImg;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ThumbnailImgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ThumbnailImgs.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="bg-Black bg-opacity-50 absolute top-0 left-0 h-[100vh] w-[100vw] z-10 items-center justify-center flex flex-col md:flex mx:hidden">
      <div className="flex flex-col justify-center">
        <button onClick={onClose} className="absolute right-[33rem] top-5 pt-2">
          <Image src={IconClose} alt="Close icon" />
        </button>

        <div className="relative">
          <button
            onClick={handlePrevious}
            className="absolute left-0 bg-White w-[50px] h-[50px] rounded-full flex items-center justify-center top-1/2 transform -translate-y-1/2 -ml-5 pr-1"
          >
            <Image src={IconPrevious} alt="Previous icon" />
          </button>
          <div className="flex justify-center -mt-5">
            <Image
              src={selectedImage}
              alt="Selected"
              className="rounded-xl w-[30rem]"
            />
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 bg-White w-[50px] h-[50px] rounded-full flex items-center justify-center top-1/2 transform -translate-y-1/2 -mr-5 pl-1"
          >
            <Image src={IconNext} alt="Next icon" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-row gap-5 items-center justify-center mt-5">
          {ThumbnailImgs.map(({ id, thumbnailImg }, index) => (
            <button
              key={id}
              onClick={() => setCurrentIndex(index)}
              className={`relative ${
                currentIndex === index
                  ? "border-Orange border-2 opacity-60"
                  : "border-transparent"
              } transition-all w-20 rounded-xl`}
            >
              <Image
                src={thumbnailImg}
                alt={`Thumbnail ${id}`}
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FullImage;
