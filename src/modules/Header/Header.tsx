"use client";

import { useEffect, useState } from "react";

import Logo from "@/shared/components/Logo/Logo";

import ActionsBlock from "./ActionsBlock/ActionsBlock";
import Navigation from "./Navigation/Navigation";

import cls from "./styles.module.scss";
// import RevealComp from "@/shared/components/RevealComp/RevealComp";

export default function Header() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 60) {
        setScrolledDown(false);
      } else if (scrollY > lastScrollY) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    // <RevealComp threshold={0.75} duration="0.3s" y={-20}>
    <header
      className={cls.header}
      // className={`${scrolledDown ? cls.none : cls.header}`}
    >
      <div className={cls.headerContainer}>
        <Logo variant="header" />
        <Navigation />
        <ActionsBlock />
      </div>
    </header>
    // </RevealComp>
  );
}
