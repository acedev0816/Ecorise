"use client"
import Link from "next/link";
import styles from "./navMenu.module.css";
import { usePathname } from "next/navigation";

export default function NavMenu() {
    const currentPath = usePathname()
    return (
        <>
            <nav className={styles.navmenu}>
                <ul className={styles.navmenuList}>
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/dashboard' ? styles.navmenuLinkItemActive : ''}`} href='/dashboard'>Dashboard</Link>
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
                                <p className={styles.navmenuDropdownCol}>
                                    <span>Sol-Rise</span>
                                    <span>2.5%</span>
                                </p>
                                <p className={styles.navmenuDropdownCol}>
                                    <span>Sol-Mim</span>
                                    <span>3%</span>
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/bridge' ? styles.navmenuLinkItemActive : ''}`} href='/bridge'>Bridge</Link>
                    </li>
                    <li className={styles.navmenuListItem}>
                        <Link className={`${styles.navmenuLinkItem} ${currentPath === '/dao-vault' ? styles.navmenuLinkItemActive : ''}`} href='/dao-vault'>DAO Vault</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}