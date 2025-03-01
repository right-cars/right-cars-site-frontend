"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import cls from "./styles.module.scss";

interface ModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  closeBtn?: boolean;
}

export default function ModalWindow(props: ModalProps) {
  const { setIsModalOpen, children, closeBtn } = props;

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, handleKeyDown]);

    const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsModalOpen(false)}>
      {isVisible && (
        <motion.div  className={cls.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit" onClick={handleClose}>
          <div className={cls.modalContainer} onClick={handleClick}>
            {children}
            {closeBtn && (
              <Image
                src="/icons/closeDark.svg"
                alt="close icon"
                width={11}
                height={11}
                onClick={handleClose}
                className={cls.close}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
