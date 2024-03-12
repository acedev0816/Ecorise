import Image from "next/image";
import styles from "./logo.module.css";
import { useEffect, useState } from "react";

export default function Logo() {
  const [colorTheme, setTheme] = useState("");

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : "dark";
    if (storedTheme != null) setTheme(storedTheme);
  }, [setTheme]);

  return (
    <div className={styles.logo}>
      {colorTheme && (<>
        <Image
          src={`/logo-dark.svg`}
          alt="EcoRise"
          width={210}
          height={70}
          className="dark:block hidden"
        />
        <Image
          src={`/logo-light.svg`}
          alt="EcoRise"
          width={210}
          height={70}
          className="dark:hidden block"
        />

      </>)}
    </div>
  );
}
