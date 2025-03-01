"use client"

import { useEffect } from "react";

import Logo from "@/shared/components/Logo/Logo";

import CloseSvg from "@icons/close.svg"

import BurgerNavigation from "./BurgerNavigation";

import cls from "./styles.module.scss";

interface BurgerMenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function BurgerMenu (props: BurgerMenuProps) {
  const { setIsMenuOpen } = props;
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className={cls.overlay}>
      <div className={cls.menuContainer} onClick={handleMenuClick}>
        <button className={cls.closeBtn} onClick={handleClick}>
          <CloseSvg className={cls.svg} />
        </button>
          <BurgerNavigation handleClick={handleClick}/>
        <div className={cls.logoWrapp}>
          <Logo variant="burger" />
        </div>
      </div>
    </div>
  );
};

