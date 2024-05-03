"use client"

import Card from "../../components/card/card";
import styles from './dao-vault.module.css';
import { useEffect, useState } from "react";
import Image from "next/image";

import { Michroma, Jura, Poppins } from "next/font/google";

const MichromaFont = Michroma({
    subsets: ["latin"],
    weight: ["400"],
    display: 'swap', adjustFontFallback: false
});

const JuraFont = Jura({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: 'swap', adjustFontFallback: false
});

const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    display: 'swap', adjustFontFallback: false
});

export default function DAOVaultPage() {
    const [colorTheme, setTheme] = useState("");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme != null) setTheme(storedTheme);

        if (document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.add('no-bg');
        }
    }, [setTheme]);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-y-9 mb-10 md:mb-24">
                <Card
                    title="Total Land Staked"
                    content="--- HECTARES"
                    contentSize="md"
                    contentFont="jura"
                    gradientBg={true}
                    cardBoxSize="xs"
                />
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 mb-10 md:mb-24 gap-y-3">
                <Card
                    title="Treasure Balance"
                    content="$ --- --- ---"
                    gradientColor="3"
                />
                <Card
                    title="ECO Price"
                    content="$ --- --- ---"
                />
            </div>
            <div className="flex justify-center mb-10 md:mb-16">
                <button className={styles.btnFilled}>Land Owner Application</button>
            </div>
            <div className="md:flex">
                <div className={`${styles.table}`}>
                    <div className="overflow-x-auto">
                        <table className="border-separate border-spacing-4 ">
                            <thead>
                                <tr>
                                    <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Property</h3></th>
                                    <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Country</h3></th>
                                    <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Type</h3></th>
                                    <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Date</h3></th>
                                    <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}></h3></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3></td>
                                </tr>
                                <tr>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Future Thinkers</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Canada</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Forest/Farm</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>Feb, 2022</h3></td>
                                    <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>10,000 tC02</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={`${styles.wrapperCol} ${styles.mapCol}`}>
                    {colorTheme && (
                        <Image src={`/globe-${colorTheme}.svg`} alt="Ecobased" width={700} height={700} />
                    )}
                </div>
            </div>
        </>
    );
}