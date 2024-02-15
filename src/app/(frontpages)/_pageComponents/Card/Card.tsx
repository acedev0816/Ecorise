"use client";

import Image from "next/image";
import { FC } from "react";
import tw from "tailwind-styled-components";
import Typography from "../Typography/Typography";
interface CardProps {
  heading: string;
  icon: string;
  text: string[];
}

const Card: FC<CardProps> = function ({ heading, icon, text }) {
  const CardWrapper = tw.div`
        border-2 border-textColor-100
        px-6 py-6
        flex flex-col gap-5
        w-full
        rounded-md
    `;

  const CardHeader = tw.div`
        flex gap-5 items-center
    `;

  const CardBody = tw.ul`
        flex flex-col gap-5
        list-disc  
        px-6
    `;

  const CardBodyItem = tw.li`
        dark:text-white text-primary
        text-lg	
        leading-normal 
        dark:text-opacity-70 text-opacity-100 
    `;

  return (
    <CardWrapper>
      <CardHeader>
        <Image src={"/ECOIcon.svg"} alt="Bitcoin Icon" width={47} height={47} />
        <Typography variant="h5" className="font-bold" fontFamily="Jura" content={heading} />
      </CardHeader>
      <CardBody>
        {text &&
          text.map((item, key) => {
            return <CardBodyItem key={key}>{item}</CardBodyItem>;
          })}
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
