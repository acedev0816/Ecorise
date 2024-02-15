"use client"

import { JuraFont } from "@/app/layout";
import Card from "../../components/card/card";
import Form from "../../components/form/form";
import RadioButton from "../../components/form/radio";
import styles from './stack-eco.module.css';
import { useEffect } from "react";

export default function StackEcoPage() {

    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg'); 
        }
    });

    return (
        <>
            <div className={styles.cardRow}>
                <Card
                    title="ECO Staking (3.3)"
                    content="3.33 minutes to next rebase"
                    contentSize="md"
                    contentFont="jura"
                    gradientBg={true}
                />
            </div>
            <div className={styles.cardRow}>
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
            <div className={styles.formWrapper}>
                <Form>
                    <div className={styles.formRow}>
                        <div className={styles.formCol}>
                            <RadioButton name="stack" value="stack" label="Stack" />
                        </div>
                        <div className={styles.formCol}>
                            <RadioButton name="stack" value="unstack" label="UnStack" />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formField}>
                            <input type="text" name="amount" className={`${styles.input} ${JuraFont.className}`} placeholder="Amount" />
                        </div>
                        <div className={styles.formField}>
                            <input type="button" className={styles.btn} name="max" value="Max" />
                        </div>
                        <div className={styles.formField}>
                            <input type="button" className={styles.btnFilled} name="stack-eco" value="Stack ECO" />
                        </div>
                    </div>
                </Form>
            </div>
            <div className={styles.tableWrapper}>
                <div className={styles.table}>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Your Balance</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>--- --- --- ECO</h3>
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Your Staked Balance</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>--- --- --- ECO</h3>
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Next Reward Amount</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>--- --- --- ECO</h3>
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>Next Reward Yield</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>--- --- --- ECO</h3>
                        </div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableCol}>
                            <h3 className={`${styles.tableHeading} ${JuraFont.className}`}>ROI (5 day rate)</h3>
                        </div>
                        <div className={styles.tableCol}>
                            <h3 className={styles.tableData}>--- --- --- ECO</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}