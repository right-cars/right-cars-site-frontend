"use client";
import { useEffect } from "react";
import Image from "next/image";
import cls from "./styles.module.scss";

interface ModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  closeBtn?: boolean;
}

export default function ModalWindow(props: ModalProps) {
  const { setIsModalOpen, children, closeBtn } = props;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, setIsModalOpen]);

  return (
    <div className={cls.overlay} onClick={handleClose}>
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
    </div>
  );
}
