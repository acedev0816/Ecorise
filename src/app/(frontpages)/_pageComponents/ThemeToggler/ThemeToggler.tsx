import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import tw from "tailwind-styled-components";

interface ThemeTogglerProp {
    themeChange: (theme: "dark" | "light") => void;
}

const ThemeToggler = forwardRef<HTMLButtonElement, ThemeTogglerProp>(function ThemeToggler({
    themeChange
}, ref) {

    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const changeTheme = () => {
        const currentTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme)
        themeChange(currentTheme);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if(currentTheme === "dark") 
        setTheme("dark");
        else setTheme("light");
    })

    const TogglerButton = tw.button`
        fixed top-1/2
        duration-300 left-[-72px] hover:left-0 ease-in-out     
    `;

    const Toggle = tw.div`
        bg-primary dark:bg-white rounded-r-3xl py-2 px-4
        flex gap-3 items-center
        shadow-md	
    `;

    const Label = tw.p`
        font-semibold
        dark:text-black text-white
    `;

    return <TogglerButton ref={ref} onClick={changeTheme}>        
        <Toggle>
            <Label>{theme === "dark" ? "LIGHT" : "DARK"}</Label>
            <Image
                src={'/sun-2.png'}
                alt="Sun"
                width={30}
                height={30}
                className="dark:block hidden"
            />
            <Image
                src={'/moon-2-white.png'}
                alt="Moon"
                width={30}
                height={30}
                className="dark:hidden block"
            />
        </Toggle>            
    </TogglerButton>
})

export default ThemeToggler;