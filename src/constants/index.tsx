import {
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  Thumbnail4,
  Product1,
  Product2,
  Product3,
  Product4,
} from "@/assets";
import { StaticImageData } from "next/image";

export const navLinks = [
  { id: "link-1", title: "Collections", link: "/" },
  { id: "link-2", title: "Men", link: "/" },
  { id: "link-3", title: "Women", link: "/" },
  { id: "link-4", title: "About", link: "/" },
  { id: "link-5", title: "Contact", link: "/" },
];

export const ThumbnailImgs = [
  {
    id: "thumbnail-1",
    thumbnailImg: Thumbnail1 as StaticImageData,
    productImg: Product1 as StaticImageData,
  },
  {
    id: "thumbnail-2",
    thumbnailImg: Thumbnail2 as StaticImageData,
    productImg: Product2 as StaticImageData,
  },
  {
    id: "thumbnail-3",
    thumbnailImg: Thumbnail3 as StaticImageData,
    productImg: Product3 as StaticImageData,
  },
  {
    id: "thumbnail-4",
    thumbnailImg: Thumbnail4 as StaticImageData,
    productImg: Product4 as StaticImageData,
  },
];

// export const ProductsImgs = [
//     {id: "product-1", productImg: Product1},
//     {id: "product-2", productImg: Product2},
//     {id: "product-3", productImg: Product3},
//     {id: "product-4", productImg: Product4},
// ];
