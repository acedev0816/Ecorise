import Image from "next/image";
import { FC } from "react";
import tw from "tailwind-styled-components";
import Typography from "../Typography/Typography";

interface CardRectProp {
    heading: string;
    icon: string;
    content: string;
}

const IconOptions: {[key: string] : {icon: string, width: number, height: number}}= {
    dollar: {
        icon: '/dollar-icon.svg',
        width: 25,
        height: 25
    },
    community: {
        icon: '/community.svg',
        width: 40,
        height: 40
    },
    qr: {
        icon: '/qrcode.svg',
        width: 30,
        height: 30
    },
    chart: {
        icon: '/chart.svg',
        width: 30,
        height: 30
    },
}

const CardRect: FC<CardRectProp> = function({ heading, icon, content }) {
    
    const CardWrapper = tw.div`
        flex gap-5 items-center
        landingPageGradientBg
        px-6 py-2
        rounded-md
        skew-x-[-10deg]
        min-h-[97px]
    `;
    
    const CardContent = tw.div`
        flex flex-col
    `;

    return <CardWrapper>
        <Image
            src={IconOptions[icon].icon}
            alt="BitCoin"
            width={IconOptions[icon].width}
            height={IconOptions[icon].height}
        />
        <CardContent>
            <Typography variant="h6"  className="dark:text-textColor-100 text-primary font-bold" fontFamily="Jura" content={heading} />
            <Typography className="text-opacity-80" variant="p" fontFamily="Jura" content={content} />
        </CardContent>
    </CardWrapper>
}

export default CardRect;