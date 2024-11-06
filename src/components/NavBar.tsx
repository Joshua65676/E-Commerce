import React from "react";
import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { ImageAvatar } from "@/assets";
import { IconCart } from "@/assets";

const NavBar: React.FC = () => {
  return (
    <nav className="">
      <section className="">
        <div className="">
          <div className="">
            <Link href="/">
              <Image src={Logo} alt="" />
            </Link>
          </div>

          <div className="">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={link}>
                  <span className="">{title}</span>
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div className="">
          <div>
            <Image src={IconCart} alt="CartIcon" />
          </div>
          <div>
            <Image src={ImageAvatar} alt="Person" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
