"use client"
import { JuraFont } from "@/app/layout";
import Card from "../../components/card/card";
import styles from './min.module.css';
import { useEffect } from "react";

export default function MintPage() {
    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg'); 
        }
    });
    return (
        <>
            <div className={styles.cardRow}>
                <Card
                    title="Mint"
                    content="(9.9)"
                    contentSize="md"
                    contentFont="jura"
                    gradientBg={true}
                    cardSize='two'
                    cardBoxSize="xs"
                />
            </div>
            <div className={styles.cardRow}>                
                <Card title='Treasure Balance' content='$ --- --- ---' cardSize='two' gradientBg={false} gradientColor="3"/>
                <Card title='ECO Price' content='$ --- --- ---' cardSize='two' gradientBg={false}/>                
            </div>
            <div className={styles.tableWrapper}>
                <div className={styles.table}>
                    <div className={`${styles.tableRow} ${styles.tableHeader}`}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Mint</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Price</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>ROI</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Purchased</h3>
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>SOL-RISE</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>$ --- --- ---</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>0 %</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>$ --- --- ---</h3>
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>SOL-MIM</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>$ --- --- ---</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableData} ${JuraFont.className}`}>0 %</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>$ --- --- ---</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnRow}>
                <button className={styles.btnFilled}>Mint</button>
            </div>
        </>
    );
}