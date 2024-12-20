"use client";
import React, { useState } from "react";
import { ThumbnailImgs } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { IconNext, IconPrevious } from "@/assets";

interface ImagesProps {
  onSelectImage: (image: StaticImageData) => void;
  onImageClick: () => void;
}

const Images: React.FC<ImagesProps> = ({ onSelectImage, onImageClick }) => {
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
    <main className="">
      <div className="flex flex-col gap-5">
        <div>
          <button onClick={handlePrevious} className="absolute left-0 bg-White w-[50px] h-[50px] rounded-full flex items-center justify-center bottom-[23.5rem] transform -translate-y-1/2 ml-5 pr-1 md:hidden">
            <Image src={IconPrevious} alt="Previous icon" />
          </button>
          <button className="-mt-5">
            <Image
              src={selectedImage}
              alt="Selected"
              className="md:rounded-xl mx:w-full"
              onClick={onImageClick}
            />
          </button>
          <button onClick={handleNext} className="absolute right-0 bg-White w-[50px] h-[50px] rounded-full flex items-center justify-center bottom-[24rem] transform -translate-y-1/2 mr-5 pl-1 md:hidden">
            <Image src={IconNext} alt="Next icon" />
          </button>
        </div>
        {/* Thumbnails */}
        <div className="flex flex-row gap-5 md:flex mx:hidden">
          {ThumbnailImgs.map(({ id, thumbnailImg, productImg }, index) => (
            <button
              key={id}
              onClick={() => {
                setCurrentIndex(index);
                onSelectImage(productImg);
              }}
            >
              <div className="relative">
                <Image
                  src={thumbnailImg}
                  alt={`Thumbnail ${id}`}
                  className={`rounded-xl transition-all ${
                    selectedImage === productImg
                      ? "border-Orange border-2 opacity-60 bg-white transition-opacity inset-0"
                      : "border-transparent"
                  }`}
                />
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-60 rounded-lg transition-opacity duration-300"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Images;
