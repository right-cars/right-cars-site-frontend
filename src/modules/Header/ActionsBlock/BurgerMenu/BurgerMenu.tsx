"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "@/shared/components/Logo/Logo";
import CloseSvg from "@icons/close.svg";

import BurgerNavigation from "./BurgerNavigation";

import cls from "./styles.module.scss";

interface BurgerMenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function BurgerMenu({ setIsMenuOpen }: BurgerMenuProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const handleClick = () => {
    setIsMenuVisible(false); 
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClick();
    }
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuVisible, handleKeyDown]);

  const overlayVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsMenuOpen(false)}>
      {isMenuVisible && (
        <motion.div
          className={cls.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className={cls.menuContainer} onClick={handleMenuClick}>
            <button className={cls.closeBtn} onClick={handleClick}>
              <CloseSvg className={cls.svg} />
            </button>
            <BurgerNavigation handleClick={handleClick} />
            <div className={cls.logoWrapp}>
              <Logo variant="burger" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
