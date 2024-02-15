"use client"

import { JuraFont, MichromaFont, PoppinsFont } from "@/app/layout";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import tw from "tailwind-styled-components";

const TypograpgyAttributes = cva([],
    {
        variants: {
            variant: {
                h1: [
                    "text-6xl",
                    "leading-normal"        
                ],
                h2: [
                    "text-5xl",
                    "leading-relaxed"
                ],
                h3: [
                    "text-4xl",
                    "leading-relaxed"
                ],
                h4: [
                    "text-3xl",
                    "leading-relaxed"
                ],
                h5: [
                    "text-2xl",
                    "leading-relaxed"
                ],
                h6: [
                    "text-xl",
                    "leading-relaxed"
                ],
                p: [
                    "text-base",
                    "leading-relaxed"
                ]
            }, 
            gradient: {
                yes: [                              
                    "landingPageGradientText",          
                    "bg-clip-text text-transparent",
                ],
                no: [
                    "dark:text-white text-primary"
                ]
            },
            fontFamily: {
                Jura: [
                    `${JuraFont.className}`
                ],
                Poppins: [
                    `${PoppinsFont.className}`
                ],
                Michroma: [
                    `${MichromaFont.className}`
                ]
            }
        },
        defaultVariants: {
            variant: "h2",
            gradient: "no",
            fontFamily: "Poppins"
          },
    }
);

type TypographyProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof TypograpgyAttributes>;


export const Typography = ({ variant, gradient, fontFamily, content, className }: TypographyProps) => {

    const TypographyElement = tw.div``;

    return (
        <TypographyElement className={cx(TypograpgyAttributes({ variant, gradient, fontFamily, className }))}>{content}</TypographyElement>
    );
}

export default Typography;