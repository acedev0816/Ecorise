"use client"
import Link from "next/link";
import styles from "./navMenu.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { reduceHexAddress } from "@/util";
import Button from "@/app/(frontpages)/_pageComponents/Button/Button";

export default function MobileNav() {
    const currentPath = usePathname()
    const [nav, setNav] = useState(false);
    const mobile_menu_ref = useRef<HTMLDivElement>(null);

    const [btnText, setBtnText] = useState("Buy ECO");
    const { connectors, connect } = useConnect();
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const btnMouseLeave = (): void => {
        setBtnText("Connect Wallet");
    };

    useEffect(() => {
        if (address)
            setBtnText(reduceHexAddress(address, 4))
        else
            setBtnText("Buy ECO");
    }, [address]);

    const onConnect = (): void => {
        console.log(address);
        if (address) {
            disconnect();
        } else {
            connect({ connector: connectors[0] });
        }
    };

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

    const onClickNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <div
                onClick={() => setNav(!nav)}
                className="block md:hidden"
            >
                <Image
                    src={`/mobilemenuwhite.png`}
                    alt="EcoRise"
                    width={36}
                    height={36}
                    className="pb-3 dark:block hidden"
                />
                <Image
                    src={`/mobilemenublack.png`}
                    alt="EcoRise"
                    width={36}
                    height={36}
                    className="pb-3 dark:hidden block"
                />
            </div>
            {nav && (
                <div
                    onClick={onClickNav}
                    ref={mobile_menu_ref}
                    className="fixed inset-0 z-40 bg-white/50 backdrop-blur-md overflow-y-auto"
                >
                    <div className="absolute h-auto left-0 dark:bg-primary bg-white px-6 py-6 opacity-90 border-l dark:border-white border-black border-1">
                        <Link href={"/"}>
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
                        </Link>
                        <menu className="text-xl overflow-y-auto">
                            <li className="pt-6">
                                <Link
                                    className={`${styles.navmenuLinkItem} ${currentPath === '/dashboard' ? styles.navmenuLinkItemActive : ''}`}
                                    href='/dashboard'
                                >
                                    Dashboard
                                </Link>
                                {address && (<>
                                    <ul className={styles.navmenuDropdown}>
                                        <li className={styles.navmenuDropdownItem}>
                                            <p className={styles.navmenuDropdownHeading}>MY ACCOUNT</p>
                                            <p className={styles.navmenuDropdownCol}>PFP NFT</p>
                                        </li>
                                    </ul>
                                    <ul className={styles.navmenuDropdown}>
                                        <li className={styles.navmenuDropdownItem}>
                                            <p className={styles.navmenuDropdownHeading}>#WALLET ADDRESS</p>
                                            <p className={styles.navmenuDropdownCol}>ECO . $11111</p>
                                            <p className={styles.navmenuDropdownCol}>ASSETS . $1111</p>
                                            <p className={styles.navmenuDropdownCol}>YIELD . $1111</p>
                                        </li>
                                    </ul>
                                </>)}
                            </li>
                            <li className="pt-6">
                                <Link
                                    className={`${styles.navmenuLinkItem} ${currentPath === '/stack-eco' ? styles.navmenuLinkItemActive : ''}`}
                                    href='/stack-eco'
                                >
                                    Stack ECO
                                </Link>
                            </li>
                            <li className="pt-6">
                                <Link
                                    className={`${styles.navmenuLinkItem} ${currentPath === '/stack-land' ? styles.navmenuLinkItemActive : ''}`}
                                    href='/stack-land'
                                >
                                    Stack Land
                                </Link>
                            </li>
                            <li className="pt-6">
                                <Link
                                    className={`${styles.navmenuLinkItem} ${currentPath === '/mint' ? styles.navmenuLinkItemActive : ''}`}
                                    href='/mint'
                                >
                                    Mint
                                </Link>
                                <ul>
                                    <li className={styles.navmenuDropdownItem}>
                                        <p className={styles.navmenuDropdownHeading}>Mint Discouts</p>
                                        {/* <p className={styles.navmenuDropdownCol}>
                                            <span>Sol-Rise</span>
                                            <span>2.5%</span>
                                        </p>
                                        <p className={styles.navmenuDropdownCol}>
                                            <span>Sol-Mim</span>
                                            <span>3%</span>
                                        </p> */}
                                    </li>
                                </ul>
                            </li>
                            <li className="pt-6">
                                <Link
                                    className={`${styles.navmenuLinkItem} ${currentPath === '/bridge' ? styles.navmenuLinkItemActive : ''}`}
                                    href='/bridge'
                                >
                                    Bridge
                                </Link>
                            </li>
                            <li className="pt-6">
                                <Link
                                    className={`${styles.navmenuLinkItem} ${currentPath === '/dao-vault' ? styles.navmenuLinkItemActive : ''}`}
                                    href='/dao-vault'
                                >
                                    DAO Vault
                                </Link>
                            </li>
                            <Button
                                className="mt-6 w-full"
                                variant="gradient"
                                fontFamily="Poppins"
                                rounded="xl3"
                                value={btnText}
                                onClick={onConnect}
                            />
                        </menu>
                    </div>
                </div>
            )}
        </>
    )
}