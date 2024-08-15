"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
            <Image src={'/icons/hamburger.svg'} alt="hamburger icon" height={36} width={36} className="sm:hidden"/>
        </SheetTrigger>
        <SheetContent className="bg-dark-1 border-none">
        <Link href={'/'} className="flex gap-1 items-center">
        <Image src={'/icons/logo.svg'} alt="Xoom logo" height={32} width={32} className="max-sm:size-10"/>
        <p className="text-[26px] text-white font-extrabold ">Xoom</p>
      </Link>
      <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
        <SheetClose asChild>
            <section className="flex flex-col gap-6 text-white pt-16">
            {sidebarLinks.map((item) => {
              const isActive = pathName === item.route
              return (
                <SheetClose asChild key={item.route}>
              <Link href={item.route} className={cn('flex gap-4 items-center p-4 rounded-lg max-w-60', {
                'bg-blue-1' : isActive
              })}>
                <Image src={item.imgUrl} alt={item.label} height={20} width={20}/>
                <p className='font-semibold'>{item.label}</p>
              </Link>
              </SheetClose>
            )})}
        </section>
        </SheetClose>
      </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
