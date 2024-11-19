"use client";

import React, { useState } from "react";
import { Logo } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { ImageAvatar } from "@/assets";
import { IconCart } from "@/assets";
import Cart from "./Cart";
import { usePathname, useRouter } from "next/navigation";

interface NavBarProps {
  cartItem: { image: StaticImageData; title: string; count: number } | null;
  onDeleteCart: () => void;
  count: number;
}
const NavBar: React.FC<NavBarProps> = ({ cartItem, onDeleteCart, count }) => {
  const [showChart, setShowChart] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <nav>
      <section className="container max-w-7xl mx-auto w-full">
        <main className="flex w-full justify-between items-center py-7">
          <div className="flex flex-row gap-16">
            <div className="">
              <Link href="/">
                <Image src={Logo} alt="" />
              </Link>
            </div>

            <div className="flex flex-row gap-7">
              {navLinks.map(({ id, title, link }) => (
                <ul key={id}>
                  <Link href={link} onClick={() => handleClick(link)}>
                    <span
                      className={`${
                        pathname === title ? "border-b-2 border-Orange" : ""
                      }text-base text-Grayishblue font-kumbh font-medium hover:text-Black`}
                    >
                      {title}
                    </span>
                  </Link>
                </ul>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <button onClick={() => setShowChart(!showChart)}>
              {count > 0 && (
                <span className="absolute top-9 ml-2  bg-Orange text-white rounded-full text-xs w-6 h-4 flex items-center justify-center font-kumbh font-semibold">
                  {count}
                </span>
              )}
              <Image
                src={IconCart}
                alt="CartIcon"
                className="hover:text-Black"
              />
            </button>
            <div>
              <Image
                src={ImageAvatar}
                alt="Person"
                className="w-[50px] h-[50px] hover:rounded-full hover:border-Orange hover:border-2"
              />
            </div>
          </div>
        </main>
        <div>
          <hr className="border" />
        </div>
        <div>
          {showChart && (
            <Cart
              image={cartItem?.image || null}
              title={cartItem?.title || "Your cart is empty."}
              count={cartItem?.count || 0}
              onDelete={onDeleteCart}
            />
          )}
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
