"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

export default function CookiesPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPopupOpen(true);
      setIsPopupVisible(true); 
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const overlayVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setIsPopupVisible(false)}
    >
      {isPopupVisible && (
        <div className={`${"container"} ${cls.wrapper}`}>
          <motion.div
            className={cls.modalContainer}
            variants={overlayVariants}
            initial="hidden"
            animate={isPopupOpen ? "visible" : "hidden"} 
            exit="exit"
          >
            <div className={cls.txtBlock}>
              <Image
                src="/icons/colorCookies.svg"
                alt="cookies icon"
                width={56}
                height={56}
                className={cls.svg}
              />
              <p className="textSmall">
                Our website use cookies. By continuing navigating, we assume your
                permission to deploy cookies as detailed in our{" "}
                <Link href={"/privacy-policy"} className={cls.link}>
                  privacy&nbsp;policy
                </Link>
              </p>
            </div>
            <div className={cls.btnWrapp}>
              <Button
                onClick={handleClose}
                img="/icons/cookies.svg"
                color="transparent"
                text="Accept cookies"
              />
            </div>
            <Image
              src="/icons/closeDark.svg"
              alt="close icon"
              width={11}
              height={11}
              onClick={handleClose}
              className={cls.close}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
