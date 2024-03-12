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
            <div className={"flex flex-col md:flex-row md:flex-wrap justify-between md:gap-x-10 gap-y-3 md:gap-y-12"}>
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