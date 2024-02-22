"use client";

import tw from "tailwind-styled-components";
import EcoRiseLogo from "@/assets/images/EcoRiseLogo.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { useState } from "react";
import { Michroma, Jura, Poppins } from "next/font/google";

const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    display: 'swap', adjustFontFallback: false
});

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
    const [nav, setNav] = useState(false);

    const btnMouseLeave = (): void => {
        setBtnText("Connect Wallet");
    }

    return (
        <HeaderRoot className="py-3 md:py-11">
            <div className="flex container mx-auto max-w-8xl justify-between">
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
                <Navigation className="flex-auto flex 2xl:justify-end">
                    <NavList className="justify-between gap-5 md:gap-14 mx-auto flex-wrap">
                        <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
                            <Link href={'/tokenize'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Tokenize</Link>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Launchpad</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Marketplace</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="tooltip relative flex flex-col items-center group hidden 2xl:block">
                            <Link href={'#'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>Dashboard</Link>
                            <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                                <div className="w-3 h-3 -mb-2 rotate-45 bg-white hidden md:block"></div>
                                <span className="relative w-[120px] z-10 p-2 text-m leading-none text-black whitespace-no-wrap bg-white shadow-lg hidden md:block">Coming soon</span>
                            </div>
                        </NavItem>
                        <NavItem className="hidden 2xl:block">
                            <Link href={'/about-us'} className={`${PoppinsFont.className} dark:text-white text-primary text-sm md:text-xl hover:font-medium dark:hover:text-textColor-100`}>AboutUs</Link>
                        </NavItem>
                    </NavList>
                </Navigation>
                <Button className="w-[15rem] my-5 mx-3 flex-auto flex 2xl:justify-end hidden 2xl:block" variant="gradient" fontFamily="Poppins" rounded="xl3" value={btnText} />
                <label className="z-40 cursor-pointer mr-5 px-0 py-6 flex-right flex 2xl:justify-end block 2xl:hidden" htmlFor="mobile-menu">
                    <input onClick={() => setNav(!nav)} className="peer hidden" type="checkbox" id="mobile-menu" />
                    <div className="relative z-50 block h-[1px] w-7 bg-white bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-white before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform">
                    </div>
                    {nav && (
                        <div onClick={() => setNav(!nav)} className="fixed inset-0 z-40 hidden h-full w-full bg-white/50 backdrop-blur-sm peer-checked:block">
                            &nbsp;
                        </div>
                    )}
                    {nav && (
                        <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                            <div className="float-right min-h-full max-w-92 bg-black px-6 pt-12 shadow-2xl opacity-70">
                                <menu className="mt-20">
                                    <li><Link href={'/tokenize'} className={`${PoppinsFont.className} dark:text-white text-primary text-4xl`}>Tokenize</Link></li>
                                    <li><Link href={'/'} className={`${PoppinsFont.className} dark:text-white text-primary text-4xl`}>Launchpad</Link></li>
                                    <li><Link href={'/'} className={`${PoppinsFont.className} dark:text-white text-primary text-4xl`}>Marketplace</Link></li>
                                    <li><Link href={'/'} className={`${PoppinsFont.className} dark:text-white text-primary text-4xl`}>Dashboard</Link></li>
                                    <li><Link href={'/about-us'} className={`${PoppinsFont.className} dark:text-white text-primary text-4xl`}>AboutUs</Link></li>
                                    <li><Link href={'/'} className={`${PoppinsFont.className} dark:text-white text-primary text-4xl`}>{btnText}</Link></li>
                                </menu>
                            </div>
                        </div>
                    )}
                </label>
            </div>
        </HeaderRoot>
    );
}

export default Header;