"use client"

import Form from '../../components/form/form';
import styles from './stack-land.module.css';
import Card from '../../components/card/card';
import { useEffect } from 'react';
import Image from 'next/image';
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

export default function StackLandPage() {

    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg'); 
        }
    });

    return (
        <>
            <div className="flex gap-x-10 flex-col md:flex-row">
                <div className="md:max-w-xl">
                    <Form>
                        <div className={styles.headingRow}>
                            <h3 className={styles.heading}>your property details below for ECO token yield estimate</h3>
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='property_size' placeholder='Property Size'/>
                            <Image src='/plus-icon.svg' width={47} height={47} alt='Plus Icon' />
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='location' placeholder='Location'/>
                            <Image src='/plus-icon.svg' width={47} height={47} alt='Plus Icon' />
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='ecosystem' placeholder='ECOsystem'/>
                            <Image src='/plus-icon.svg' width={47} height={47} alt='Plus Icon' />
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='pes_potential' placeholder='Pes Potential'/>
                            <Image src='/plus-icon.svg' width={47} height={47} alt='Plus Icon' />
                        </div>
                        <div className={styles.formRow}>
                            <input className={`${styles.input} ${JuraFont.className}`} type='text' name='staking_period' placeholder='Staking Period'/>
                            <Image src='/plus-icon.svg' width={47} height={47} alt='Plus Icon' />
                        </div>
                        <div className={styles.equalRow}>
                            <span className={styles.equal}></span>
                            <span className={styles.equal}></span>
                        </div>
                        <div>
                            <Card title='ECO Tokens Earned' content='--- --- --- ECO' cardSize='one' gradientBg={true} gradientColor='4'/>
                        </div>
                    </Form>
                </div>
                <div className="mt-10 md:mt-0">
                    <button className={styles.btnFilled}>Land Owner Application</button>
                </div>
            </div>
        </>
    );
}