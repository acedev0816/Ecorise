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

    const dashboardHeads: DashboardStats[] = [
        {
            title: 'TREASURY BALANCE',
            content: '$ ___ ___ ___',
        },
    ];

    const dashboardStats: DashboardStats[] = [
        {
            title: 'ECO PRICE',
            content: '$ ___ ___ ___',
        },
        {
            title: 'ECO MARkET CAP',
            content: '$ ___ ___ ___',
        },
        {
            title: 'ECO TVL',
            content: '$ ___ ___ ___',
        },
        {
            title: 'AUM',
            content: '$ ___ ___ ___',
        }
    ];

    useEffect( () => { 
        if(document.querySelector(".mainContent") != null) {
            document.querySelector(".mainContent")?.classList.remove('no-bg'); 
        }
    });

    return (
        <>
            <div className={"mb-12"}>
                {dashboardHeads && dashboardHeads.map((stat, index) => <Card
                    title={stat.title}
                    content={stat.content}
                    contentSize={stat.contentSize ? stat.contentSize : 'lg'}
                    contentFont={stat.contentFont ? stat.contentFont : 'michroma'}
                    cardSize={'one'}
                    key={index}
                />)}
            </div>
            <div className={"flex flex-col md:flex-row justify-between md:gap-x-5 gap-y-3 md:gap-y-12"}>
                {dashboardStats && dashboardStats.map((stat, index) => <Card
                    title={stat.title}
                    content={stat.content}
                    contentSize={stat.contentSize ? stat.contentSize : 'lg'}
                    contentFont={stat.contentFont ? stat.contentFont : 'michroma'}
                    cardSize={'four'}
                    key={index}
                />)}
            </div>
        </>
    );
}