"use client";
import React, { useState } from "react";
import { ThumbnailImgs } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { IconClose, IconNext, IconPrevious } from "@/assets";

interface FullImageProps {
  onClose: () => void;
}
const FullImage: React.FC<FullImageProps> = ({onClose}) => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    ThumbnailImgs[0].productImg
  );

  return (
    <main className=" bg-Black bg-opacity-50 absolute top-0 left-0 h-[100vh] w-[100vw] z-10 items-center justify-center flex flex-col">
      <div className="flex flex-col justify-center">
        <button onClick={onClose} className="absolute right-[33rem] top-5 pt-2">
          <Image src={IconClose} alt="" className="" />
        </button>

        <div className="">
          <button className="relative bg-White w-[50px] h-[50px] rounded-full flex items-center justify-center top-60 bottom-0 -ml-3">
            <Image src={IconPrevious} alt="" />
          </button>
          <div className="-mt-5">
            <Image
              src={selectedImage}
              alt="Selected"
              className="rounded-xl w-[30rem]"
            />
          </div>
          <button className="relative bg-White w-[50px] h-[50px] rounded-full flex items-center justify-center bottom-[16.9rem] ml-[28rem]">
            <Image src={IconNext} alt="" />
          </button>
        </div>
        {/* Thumbnails */}
        <div className="flex flex-row gap-5 items-center justify-center">
          {ThumbnailImgs.map(({ id, thumbnailImg, productImg }) => (
            <button
              key={id}
              onClick={() => {
                setSelectedImage(productImg);
              }}
            >
              <div className="relative">
                <Image
                  src={thumbnailImg}
                  alt={`Thumbnail ${id}`}
                  className={`rounded-xl transition-all w-20 ${
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

export default FullImage;
