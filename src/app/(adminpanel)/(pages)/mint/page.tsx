"use client"

import Card from "../../components/card/card";
import styles from './min.module.css';
import { useEffect } from "react";
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

export default function MintPage() {
    useEffect(() => {
        if (document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg');
        }
    });
    return (
        <>
            <div className="flex flex-wrap justify-center gap-y-9 mb-10 md:mb-24">
                <Card
                    title="Mint"
                    content="(9.9)"
                    contentSize="md"
                    contentFont="jura"
                    gradientBg={true}
                    cardBoxSize="xs"
                />
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 mb-10 md:mb-24 gap-y-3">
                <Card title='Treasure Balance' content='$ --- --- ---' gradientBg={false} gradientColor="3" />
                <Card title='ECO Price' content='$ --- --- ---' gradientBg={false} />
            </div>
            <div className={`${styles.table} md:max-w-4xl mb-10 md:mb-24`}>
                <div className="overflow-x-auto">
                    <table className="border-separate border-spacing-4 ">
                        <thead>
                            <tr >
                                <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Mint</h3></th>
                                <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Price</h3></th>
                                <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>ROI</h3></th>
                                <th><h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Purchased</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>SOL-RISE</h3></td>
                                <td><h3 className={styles.tableData}>$ --- --- ---</h3></td>
                                <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>0 %</h3></td>
                                <td><h3 className={styles.tableData}>$ --- --- ---</h3></td>
                            </tr>
                            <tr >
                                <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>SOL-MIM</h3></td>
                                <td><h3 className={styles.tableData}>$ --- --- ---</h3></td>
                                <td><h3 className={`${styles.tableData} ${JuraFont.className}`}>0 %</h3></td>
                                <td><h3 className={styles.tableData}>$ --- --- ---</h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.btnRow}>
                <button className={styles.btnFilled}>Mint</button>
            </div>
        </>
    );
}