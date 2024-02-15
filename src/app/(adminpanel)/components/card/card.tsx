import { FC } from "react";
import styles from './card.module.css';
import { JuraFont, MichromaFont } from "@/app/layout";

const Card: FC<{
    title: string;
    content: string | null | undefined;
    contentSize?: 'xs'|'md'|'lg';
    contentFont?: 'jura'|'michroma';
    gradientBg?: boolean;
    cardSize?: 'one'|'two'|'three';
    gradientColor?: '1'|'2'|'3'|'4';
    cardBoxSize?: 'xs'|'md'|'lg';
}> = (props = {
    title: '',
    content: '',
    contentSize: 'lg',
    contentFont: 'michroma',
    gradientBg: false,
    cardSize: 'three',
    gradientColor: '1',
    cardBoxSize: 'lg',
}) : JSX.Element => {

    return (
        <>
            <div className={`${styles.card} ${props.gradientBg ? styles.cardBg : ''} ${!props.content ? styles.noContent : ''} ${props.cardSize === 'one' ? styles.cardFull : ''} ${props.cardSize === 'two' ? styles.cardTwo : ''} ${props.gradientColor === '2' ? styles.cardBg2 : ''} ${props.cardBoxSize === 'xs' ? styles.cardSmallHeight : ''} ${props.gradientColor === '3' ? styles.cardBg3 : ''} ${props.gradientColor === '4' ? styles.cardBg4 : ''}`}>
                <h3 className={`${styles.cardHeading} ${JuraFont.className} `}>{props.title}</h3>
                {props.content && props.contentSize === 'md' && <p className={`${styles.cardPara} ${styles.cardParaMd} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
                {props.content && props.contentSize === 'xs' && <p className={`${styles.cardPara} ${styles.cardParaXs} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
                {props.content && props.contentSize === 'lg' && <p className={`${styles.cardPara} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
                {props.content && !props.contentSize && <p className={`${styles.cardPara} ${props.contentFont === 'jura' ? JuraFont.className : MichromaFont.className}`}>{props.content}</p>}
            </div>
        </>
    )

}

export default Card;