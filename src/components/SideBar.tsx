import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { CloseIcon } from "@/assets";

interface MenuProps {
    onClose: () => void;
}
const MenuBar: React.FC<MenuProps> = ({ onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <main className="bg-White absolute h-[125vh] z-20 left-0 w-8/12">
      <section className="flex flex-col gap-10 p-10 pb-5">
        <button onClick={onClose} className="">
          <Image src={CloseIcon} alt="" />
        </button>
        <div className="flex flex-col gap-7 mx:flex md:hidden">
          {navLinks.map(({ id, title, link }) => (
            <ul key={id}>
              <Link href={link} onClick={() => handleClick(link)}>
                <span
                  className={`${
                    pathname === title ? "border-b-2 border-Orange" : ""
                  }text-base font-kumbh font-medium text-Black`}
                >
                  {title}
                </span>
              </Link>
            </ul>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MenuBar;
