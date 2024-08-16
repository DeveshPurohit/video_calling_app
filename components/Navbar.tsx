import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between z-50 fixed w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={'/'} className="flex gap-2 items-center">
        <Image src={'/icons/logo.jpg'} alt="Xoom logo" height={32} width={32} className="max-sm:size-10 rounded-full"/>
        <p className="text-[26px] text-white font-extrabold max-sm:hidden">Xoom</p>
      </Link>
      <div className="flex-between gap-5">
        <UserButton/>
        <MobileNav/>
      </div>
    </nav>
  );
};

export default Navbar;
