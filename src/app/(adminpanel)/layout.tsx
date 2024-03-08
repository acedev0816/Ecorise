"use client";
import useTheme from "@/hooks/useTheme";
import Logo from "./components/logo/logo"
import NavMenu from "./components/nav-menu/navMenu"
import MobileNav from "./components/nav-menu/mobileNav";
import { useEffect, useState } from "react";
import SideBar from "./components/sidebar/sidebar";
import ThemeToggler from "../(frontpages)/_pageComponents/ThemeToggler/ThemeToggler";
import Link from "next/link";


export default function AdminPanelLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
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
        <div className="adminPanel">
          <SideBar>
            <Link href={"/"}>
              <Logo />
            </Link>
            <NavMenu />
          </SideBar>
          <section className="p-5 md:p-14 w-full md:w-77 md:min-w-[calc(100%-310px)] bg-right-bottom bg-no-repeat bg-auto"
            style={{ backgroundImage: "url('/dashboard-bg.png')" }}
          >
            <MobileNav />
            {children}
          </section>
          <ThemeToggler themeChange={setTheme} />
        </div>
      )}
    </>
  )
}