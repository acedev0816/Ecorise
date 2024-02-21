"use client";

import tw from "tailwind-styled-components";
import EcoRiseLogo from "@/assets/images/EcoRiseLogo.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { PoppinsFont } from "@/app/layout";
import { useState } from "react";


const HeaderRoot = tw.header`
    dark:bg-primary bg-white    
    py-11 px-4
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

const Header = function () {
    const [btnText, setBtnText] = useState("Buy ECO");

    const btnMouseLeave = (): void => {
        setBtnText("Connect Wallet");
    }

    return (
        <HeaderRoot className="py-3 md:py-11">
            <div className="flex flex-col container mx-auto max-w-8xl justify-between md:flex-row">
                <Link href={'/'} className="mx-3 flex-none">
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
                <Navigation className="flex-auto flex md:justify-end">
                    <NavList className="justify-between gap-5 md:gap-14 mx-auto flex-wrap">
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'/tokenize'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Tokenize</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Launchpad</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Marketplace</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Dashboard</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem>
                            <Link href={'/about-us'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>AboutUs</Link>
                        </NavItem>
                    </NavList>
                </Navigation>
                <Button className="w-[15rem] my-5 mx-3 flex-none " variant="gradient" fontFamily="Poppins" rounded="xl3" value={btnText} />
            </div>
        </HeaderRoot>
    );
}

export default Header;