"use client"

import { JuraFont, MichromaFont, PoppinsFont } from "@/app/layout";
import { ButtonHTMLAttributes, FC } from "react";
import tw from "tailwind-styled-components";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const ButtonVariants = cva(
    ['px-7', 'py-3', 'hover:opacity-80', "font-semibold", 'dark:text-white text-primary'],
    {
        variants: {
            variant: {
                gradient: [
                    'landingPageGradientBtn',                    
                ],
                outlined: [
                    'border-2',
                    'border-textColor-100',
                    'px-11', 'py-5'
                ]
            },
            size: {
                lg: [
                    'text-lg'        
                ],
                sm: [
                    'text-sm'
                ],
                md: [
                    'text-md'
                ]
            },
            rounded: {
                md: [
                    'rounded-md'
                ],
                xl: [
                    'rounded-xl'
                ],
                xl3: [
                    'rounded-3xl'
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
            variant: 'gradient',
            size: 'lg',
            rounded: 'xl3',
            fontFamily: 'Poppins'
        }
    }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonVariants>;

const Button = function({ variant, size, rounded, fontFamily, value, className }: ButtonProps){

    const ButtonRoot = tw.button``;

    return <ButtonRoot className={cx(ButtonVariants({variant, size, rounded, fontFamily, className}))}>{value}</ButtonRoot>

}

export default Button;