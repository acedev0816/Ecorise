"use client"

import Card from "../../components/card/card";
import Form from "../../components/form/form";
import RadioButton from "../../components/form/radio";
import styles from './stack-eco.module.css';
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

export default function StackEcoPage() {

    useEffect(() => {
        if (document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg');
        }
    });

    return (
        <>
            <div className={"flex flex-col md:flex-row md:flex-wrap justify-between md:gap-x-10 gap-y-3 md:gap-y-12 mb-10 md:mb-32"}>
                <Card
                    title="ECO Staking (3.3)"
                    content="3.33 minutes to next rebase"
                    contentSize="md"
                    contentFont="jura"
                    gradientBg={true}
                />
            </div>
            <div className={"flex flex-col md:flex-row md:flex-wrap justify-between md:gap-x-10 gap-y-3 md:gap-y-12 mb-10 md:mb-32"}>
                <Card
                    title="APY"
                    content="%"
                    contentSize="lg"
                    contentFont="jura"
                />
                <Card
                    title="TVL"
                    content="$ --- --- ---"
                />
                <Card
                    title="Current Index"
                    content="7.77"
                />
            </div>
            <div className="container">
                <Form>
                    <div className="flex justify-center">
                        <div>
                            <RadioButton name="stack" value="stack" label="Stack" />
                        </div>
                        <div>
                            <RadioButton name="stack" value="unstack" label="UnStack" />
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row mt-10 md:mt-20 md:mx-auto md:max-w-screen-md gap-y-5 mb-10 md:mb-20`}>
                        <input type="text" name="amount" className={`md:flex-1 ${styles.input} ${JuraFont.className} `} placeholder="Amount" />
                        <div className="flex justify-center">
                            <input type="button" className={`${styles.btn}`} name="max" value="Max" />
                            <input type="button" className={`ml-5 md:ml-10 ${styles.btnFilled}`} name="stack-eco" value="Stack ECO" />
                        </div>
                    </div>
                </Form>
            </div>
            <div>
                <div className={styles.table}>
                    <div className="flex flex-col md:flex-row justify-between">
                        <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Your Balance</h3>
                        <h3 className={styles.tableData}>--- --- --- ECO</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-3">
                        <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Your Staked Balance</h3>
                        <h3 className={styles.tableData}>--- --- --- ECO</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-3">
                        <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Next Reward Amount</h3>
                        <h3 className={styles.tableData}>--- --- --- ECO</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-3">
                        <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Next Reward Yield</h3>
                        <h3 className={styles.tableData}>--- --- --- ECO</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-3">
                        <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>ROI (5 day rate)</h3>
                        <h3 className={styles.tableData}>--- --- --- ECO</h3>
                    </div>
                </div>
            </div>
        </>
    );
}