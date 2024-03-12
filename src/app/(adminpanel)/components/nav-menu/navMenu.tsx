"use client"
import Link from "next/link";
import styles from "./navMenu.module.css";
import { usePathname } from "next/navigation";
import Button from "@/app/(frontpages)/_pageComponents/Button/Button";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { reduceHexAddress } from "@/util";

export default function NavMenu() {
    const currentPath = usePathname()
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

    return (
        <div className="">
            <nav className={`${styles.navmenu}`}>
                <ul className={`${styles.navmenuList}`}>
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/dashboard' ? styles.navmenuLinkItemActive : ''}`} href='/dashboard'>Dashboard</Link>
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
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/stack-eco' ? styles.navmenuLinkItemActive : ''}`} href='/stack-eco'>Stack ECO</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/stack-land' ? styles.navmenuLinkItemActive : ''}`} href='/stack-land'>Stack Land</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/mint' ? styles.navmenuLinkItemActive : ''}`} href='/mint'>Mint</Link>
                        <ul className={styles.navmenuDropdown}>
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
                    {/* <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/bridge' ? styles.navmenuLinkItemActive : ''}`} href='/bridge'>Bridge</Link>
                    </li> */}
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/dao-vault' ? styles.navmenuLinkItemActive : ''}`} href='/dao-vault'>DAO Vault</Link>
                    </li>
                    <Button
                        className="mt-8 w-full"
                        variant="gradient"
                        fontFamily="Poppins"
                        rounded="xl3"
                        value={btnText}
                        onClick={onConnect}
                    />
                </ul>
            </nav>
        </div>
    )
}