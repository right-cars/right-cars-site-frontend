"use client";

import { useState } from "react";
import Image from "next/image";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

import cls from "./styles.module.scss";

export default function BurgerBtn() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className={cls.burgerBox}
        onClick={handleMenuClick}
        aria-label="menu"
      >
        <Image src="/icons/menu.svg" alt="menu icon" width={40} height={40} />
      </button>
      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setMenuOpen} />
    </>
  );
}
