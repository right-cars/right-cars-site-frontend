import { useState } from "react";
import Image from "next/image";
// import BurgerMenu from "../BurgerMenu";
import cls from "./styles.module.scss";

export default function BurgerBtn() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = () => {
    setMenuOpen(false);
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
      {isMenuOpen && (
        <>
          <div className={cls.overlay} onClick={handleBackdropClick} />
          {/* <BurgerMenu setIsMenuOpen={setMenuOpen} /> */}
        </>
      )}
    </>
  );
}
