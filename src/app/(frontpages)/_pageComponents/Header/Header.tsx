"use client";

import tw from "tailwind-styled-components";
import EcoRiseLogo from "@/assets/images/EcoRiseLogo.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import { Michroma, Jura, Poppins } from "next/font/google";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { reduceHexAddress } from "@/util";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const HeaderRoot = tw.header`
    dark:bg-primary bg-white    
    py-3 md:py-11 px-2 md:px-4
`;

const HeaderWrapper = tw.div`    
    flex items-center justify-between
    max-w-screen-2xl m-auto
`;

const Navigation = tw.nav``;

const NavList = tw.ul`
    flex items-center
`;

const NavItem = tw.li``;

const Header = () => {
  const [btnText, setBtnText] = useState("Buy ECO");
  const [nav, setNav] = useState(false);
  const mobile_menu_ref = useRef<HTMLDivElement>(null);

  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const btnMouseLeave = (): void => {
    setBtnText("Connect Wallet");
  };
  
  useEffect(()=> {
    if (address)
        setBtnText(reduceHexAddress(address, 4))
    else 
        setBtnText("Buy ECO");
  }, [address]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        nav &&
        mobile_menu_ref.current &&
        !mobile_menu_ref.current.contains(event.target as Node)
      ) {
        setNav(!nav);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav, mobile_menu_ref]);

  const onConnect = (): void => {
    console.log(address);
    if (address) {
        disconnect();
    } else {
        connect({ connector: connectors[0] });
    }
  };

  const onClickNav = () => {
    setNav(!nav);
  }
  return (
    <HeaderRoot>
      <div className="flex container mx-auto max-w-8xl justify-between">
        <Link href={"/"} className="flex-none">
          <Image
            src={`/logo-dark.svg`}
            alt="EcoRise"
            width={300}
            height={80}
            className="dark:block hidden"
          />
          <Image
            src={`/logo-light.svg`}
            alt="EcoRise"
            width={300}
            height={80}
            className="dark:hidden block"
          />
        </Link>
        <Navigation className="flex-auto flex 2xl:justify-end ">
          <NavList className="justify-between gap-5 md:gap-14 mx-auto flex-wrap">
            <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
              <Link
                href={"/tokenize"}
                className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}
              >
                Tokenize
              </Link>
            </NavItem>
            <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
              <Link
                href={"#"}
                className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}
              >
                Launchpad
              </Link>
              <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">
                  Coming soon
                </span>
              </div>
            </NavItem>
            <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
              <Link
                href={"#"}
                className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}
              >
                Marketplace
              </Link>
              <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">
                  Coming soon
                </span>
              </div>
            </NavItem>
            <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
              <Link
                href={"/dashboard"}
                className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}
              >
                Dashboard
              </Link>
            </NavItem>
            <NavItem className="hidden 2xl:block">
              <Link
                href={"/about-us"}
                className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}
              >
                AboutUs
              </Link>
            </NavItem>
          </NavList>
        </Navigation>
        <Button
          className="w-[15rem] my-5 mx-3 flex-auto flex 2xl:justify-end hidden 2xl:block"
          variant="gradient"
          fontFamily="Poppins"
          rounded="xl3"
          value={btnText}
          onClick={onConnect}
        />
        <div
          onClick={() => setNav(!nav)}
          className="flex-right mt-15 2xl:justify-end block 2xl:hidden"
        >
          <Image
            src={`/mobilemenuwhite.png`}
            alt="EcoRise"
            width={36}
            height={36}
            className="pt-8 dark:block hidden"
          />
          <Image
            src={`/mobilemenublack.png`}
            alt="EcoRise"
            width={36}
            height={36}
            className="pt-8 dark:hidden block"
          />
        </div>
        {nav && (
          <div
            onClick={onClickNav}
            ref={mobile_menu_ref}
            className="fixed inset-0 z-40 bg-white/50 backdrop-blur-md"
          >
            <div className="absolute h-full right-0 dark:bg-primary bg-white px-6 py-6 opacity-90 border-l dark:border-white border-black border-1">
              <Image
                src={`/logo-dark.svg`}
                alt="EcoRise"
                width={200}
                height={80}
                className="dark:block hidden"
              />
              <Image
                src={`/logo-light.svg`}
                alt="EcoRise"
                width={200}
                height={80}
                className="dark:hidden block"
              />
              <menu className="text-2xl ">
                <li className="pt-6">
                  <Link
                    href={"/tokenize"}
                    className={`${PoppinsFont.className} dark:text-white text-primary`}
                  >
                    Tokenize
                  </Link>
                </li>
                <li className="pt-6">
                  <Link
                    href={"/"}
                    className={`${PoppinsFont.className} dark:text-white text-primary`}
                  >
                    Launchpad
                  </Link>
                </li>
                <li className="pt-6">
                  <Link
                    href={"/"}
                    className={`${PoppinsFont.className} dark:text-white text-primary`}
                  >
                    Marketplace
                  </Link>
                </li>
                <li className="pt-6">
                  <Link
                    href={"/dashboard"}
                    className={`${PoppinsFont.className} dark:text-white text-primary`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="pt-6">
                  <Link
                    href={"/about-us"}
                    className={`${PoppinsFont.className} dark:text-white text-primary`}
                  >
                    AboutUs
                  </Link>
                </li>
              </menu>
              <Button
                className="mt-6 w-[10rem]"
                variant="gradient"
                fontFamily="Poppins"
                rounded="xl3"
                value={btnText}
                onClick={onConnect}
              />
            </div>
          </div>
        )}
      </div>
    </HeaderRoot>
  );
};

export default Header;
