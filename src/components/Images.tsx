"use client";
import React, { useState } from "react";
import { ThumbnailImgs } from "@/constants";
import Image, { StaticImageData } from "next/image";
import FullImage from "./FullImage";

interface ImagesProps {
  onSelectImage: (image: StaticImageData) => void;
}

const Images: React.FC<ImagesProps> = ({ onSelectImage }) => {
  const [showFullImg, setShowFullImg] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    ThumbnailImgs[0].productImg
  );

  return (
    <main className="">
      <div className="flex flex-col gap-5">
        <button className="-mt-5">
          <Image
            src={selectedImage}
            alt="Selected"
            className="rounded-xl"
            onClick={() => setShowFullImg(!showFullImg)}
          />
        </button>
        {/* Thumbnails */}
        <div className="flex flex-row gap-5">
          {ThumbnailImgs.map(({ id, thumbnailImg, productImg }) => (
            <button
              key={id}
              onClick={() => {
                setSelectedImage(productImg);
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
      {/* Full Image */}
      <div className="">{showFullImg && <FullImage />}</div>
    </main>
  );
};

export default Images;
