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
    py-6 px-4
`;

const HeaderWrapper = tw.div`    
    flex items-center justify-between
    max-w-screen-2xl m-auto
`;

const Navigation = tw.nav``;

const NavList = tw.ul`
    flex gap-14 items-center
`;

const NavItem = tw.li``;

const Header = function(){
    const [btnText, setBtnText] = useState("Buy ECO");

    const btnMouseLeave = () : void => {
        setBtnText("Connect Wallet");
    }

    return (
        <HeaderRoot>
            <HeaderWrapper>
                <Link href={'/'}>
                    <Image
                        src={`/logo-dark.svg`}
                        alt="EcoRise"
                        width={210}
                        height={70}
                        className="dark:block hidden"
                        />
                    <Image
                        src={`/logo-light.svg`}
                        alt="EcoRise"
                        width={210}
                        height={70}
                        className="dark:hidden block"
                        />
                </Link>
                <Navigation>
                    <NavList>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-base hover:font-medium dark:hover:text-textColor-100`}>Tokenize</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-base hover:font-medium dark:hover:text-textColor-100`}>Launchpad</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-base hover:font-medium dark:hover:text-textColor-100`}>Marketplace</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-base hover:font-medium dark:hover:text-textColor-100`}>Dashboard</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem>
                            <Link href={'/about-us'} className={`${PoppinsFont.className} dark:text-white text-primary text-base hover:font-medium dark:hover:text-textColor-100`}>About Us</Link>
                        </NavItem>
                        <NavItem onMouseLeave={btnMouseLeave}>
                            <Button className="w-[13rem]" variant="gradient" size="lg" fontFamily="Poppins" rounded="xl3" value={btnText}  />
                        </NavItem>
                    </NavList>
                </Navigation>
            </HeaderWrapper>
        </HeaderRoot>
    );
}

export default Header;