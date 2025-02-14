"use client";

import { useEffect, useState } from "react";
import ActionsBlock from "./ActionsBlock/ActionsBlock";
import Logo from "@/shared/components/Logo/Logo";
import Navigation from "./Navigation/Navigation";
import cls from "./styles.module.scss";

export default function Header() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`${scrolledDown ? cls.none : cls.header}`}>
      <div className={cls.headerContainer}>
        <Logo variant="header" />
        <Navigation />
        <ActionsBlock />
      </div>
    </header>
  );
}
