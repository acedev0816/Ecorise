"use client";

import tw from "tailwind-styled-components";
import Header from "./_pageComponents/Header/Header";
import "tailwindcss/tailwind.css";
import "./landingPage.css";
import "./animation.css";
import Footer from "./_pageComponents/Footer/Footer";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import ThemeToggler from "./_pageComponents/ThemeToggler/ThemeToggler";
import WagmiProvider from "../../providers/wagmi-provider";

const Wrapper = tw.div``;

const LandingPageLayout = function ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setMounted] = useState(false);
  const [colorTheme, setTheme] = useTheme();

  useEffect(() => {
    setMounted(true);
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") setTheme("dark");
    else setTheme("light");
  }, []);

  return (
    <>
      {isMounted && (
        <WagmiProvider>
          <Wrapper>
            <ThemeToggler themeChange={setTheme} />
            <Header />
            {children}
            <Footer />
          </Wrapper>
        </WagmiProvider>
      )}
    </>
  );
};

export default LandingPageLayout;
