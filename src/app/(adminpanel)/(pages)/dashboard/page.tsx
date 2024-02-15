"use client"

import { useEffect } from "react";
import Card from "../../components/card/card";
import styles from './dashboard.module.css';

export default function DashboardPage() {

    type DashboardStats = {
        title: string;
        content: string | null;
        contentSize?: 'lg'|'md'|'xs';
        contentFont?: 'jura'|'michroma';
    }

    const dashboardStats: DashboardStats[] = [
        {
            title: 'ECO price',
            content: '$ --- --- ---',
        },
        {
            title: 'Backing Per $ECO',
            content: '1 : 1',
        },
        {
            title: 'Market Cap',
            content: '$ --- --- ---',
        },
        {
            title: 'PES',
            content: '$ --- --- ---',
        },
        {
            title: 'TVL',
            content: '$ --- --- ---',
        },
        {
            title: 'RUNWAY',
            content: null,
        },
        {
            title: 'Total Land Staked',
            content: '--- HECTARES',
            contentSize: 'xs',
        },
        {
            title: 'Total Land Value Staked',
            content: '$ --- --- ---',
        },
        {
            title: 'Treasury Balance',
            content: '$ --- --- ---',
        },
        {
            title: 'Current Index',
            content: '7.7 ECO',
        },
        {
            title: 'APY',
            content: '%',
            contentFont: 'jura',
        },
        {
            title: 'Protocol Owned Liquidity',
            content: null,
        }
    ];

    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg'); 
        }
    });

    return (
        <>
            <div className={styles.cardRow}>
                {dashboardStats && dashboardStats.map((stat, index) => <Card
                    title={stat.title}
                    content={stat.content}
                    contentSize={stat.contentSize ? stat.contentSize : 'lg'}
                    contentFont={stat.contentFont ? stat.contentFont : 'michroma'}
                    key={index}
                />)}
            </div>
        </>
    );
}