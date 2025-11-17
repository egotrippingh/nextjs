'use client'


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@heroui/react";
import Image from 'next/image';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";



export const AcmeLogo = () => {
  return (
    <Image
      src='/logo_tatar_kitchen.png'
      alt='logo'
      width={26}
      height={26}
      preload={true}
    />
  );
};

function Header() {

  const getNavItems = () => {
    return siteConfig.navItems.map((item, i) => {
      const isActive = pathname === item.link
      return (
        <NavbarItem key={i}>
          <Link
            href={item.link}
            key={i}
            className={
              `font-bold text-md px-3 py-1 transition-colors 
                duration-200 ${isActive ? "text-purple-800 " +
                "hover:text-purple-500" :
                'hover:text-purple-500'}`
            }
          >
            {item.label}
          </Link>
        </NavbarItem>
      )
    })
  }

  const pathname = usePathname()

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <Link href="/" className="flex gap-1">
          <p className="font-bold text-inherit">Velvet Kütchen</p>
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/signup"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

    </Navbar>
  );
}

export default Header
