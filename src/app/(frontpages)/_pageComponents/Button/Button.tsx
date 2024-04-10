"use client";

import { ButtonHTMLAttributes, FC } from "react";
import tw from "tailwind-styled-components";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { Michroma, Jura, Poppins } from "next/font/google";

const MichromaFont = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
});

const JuraFont = Jura({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const ButtonVariants = cva(
  [
    "px-7",
    "py-3",
    "hover:opacity-80",
    "font-semibold",
    "dark:text-white text-primary",
  ],
  {
    variants: {
      variant: {
        gradient: ["landingPageGradientBtn"],
        outlined: ["border-2", "border-textColor-100", "px-11", "py-5"],
      },
      size: {
        lg: ["text-lg"],
        sm: ["text-sm"],
        md: ["text-md"],
      },
      rounded: {
        md: ["rounded-md"],
        xl: ["rounded-xl"],
        xl3: ["rounded-3xl"],
      },
      fontFamily: {
        Jura: [`${JuraFont.className}`],
        Poppins: [`${PoppinsFont.className}`],
        Michroma: [`${MichromaFont.className}`],
      },
      position:{
        relative: ["relative"],
        absolute: ["absolute"]
      }
    },
    defaultVariants: {
      variant: "gradient",
      size: "lg",
      fontFamily: "Poppins",
      position: "relative"
    },
  }
);
interface CustomButtonProps {
  loading?: boolean;
  comingSoon?: boolean;
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> &
  CustomButtonProps;

const Button = function ({
  variant,
  size,
  rounded,
  fontFamily,
  value,
  className,
  loading,
  comingSoon,
  ...others
}: ButtonProps) {
  const ButtonRoot = tw.button``;

  return (
    <ButtonRoot
      className={cx(
        ButtonVariants({ variant, size, rounded, fontFamily, className })
      ) + " group"}
      {...others}
    >
      {comingSoon && <div className="absolute hidden group-hover:flex items-center justify-center  text-xs  text-white bg-blue-500 rounded-full -top-2 -right-10 py-1 px-2">Coming Soon...</div>}
      {loading && (
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 me-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      )}
      {value}
    </ButtonRoot>
  );
};

export default Button;
