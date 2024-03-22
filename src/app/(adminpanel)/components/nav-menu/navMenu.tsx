"use client";
import Link from "next/link";
import styles from "./navMenu.module.css";
import { usePathname } from "next/navigation";
import Button from "@/app/(frontpages)/_pageComponents/Button/Button";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { reduceHexAddress } from "@/util";

export default function NavMenu() {
  const currentPath = usePathname();
  const [btnText, setBtnText] = useState("Buy ECO");
  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const btnMouseLeave = (): void => {
    setBtnText("Connect Wallet");
  };

  useEffect(() => {
    if (address) setBtnText(reduceHexAddress(address, 4));
    else setBtnText("Buy ECO");
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
          <li className={`${styles.navmenuListItem} mt-10`}>
            <Link
              className={`${styles.navmenuLinkItem} ${
                currentPath === "/dashboard" ? styles.navmenuLinkItemActive : ""
              }`}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <Button
              className="mt-8 w-full"
              variant="gradient"
              fontFamily="Poppins"
              rounded="xl3"
              value={btnText}
              onClick={onConnect}
            />
            {
              <>
                <ul className={styles.navmenuDropdown}>
                  <li className={styles.navmenuDropdownItem}>
                    <p className={styles.navmenuDropdownHeading}>MY ACCOUNT</p>

                    <div className="flex gap-2 pb-1 ml-4">
                      <p className={styles.navmenuDropdownContentTitle}>ECO</p>
                      <p className={styles.navmenuDropdownContentValue}>$---</p>
                    </div>
                    <div className="flex gap-2 pb-1 ml-4">
                      <p className={styles.navmenuDropdownContentTitle}>
                        ASSETS
                      </p>
                      <p className={styles.navmenuDropdownContentValue}>$---</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <p className={styles.navmenuDropdownContentTitle}>
                        YIELD
                      </p>
                      <p className={styles.navmenuDropdownContentValue}>$---</p>
                    </div>
                    {/* <p className={styles.navmenuDropdownCol}>PFP NFT</p> */}
                  </li>
                </ul>
              </>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}
