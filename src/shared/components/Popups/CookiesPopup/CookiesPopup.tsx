"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

export default function CookiesPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isPopupOpen) return null;

  return (
    <div className={`${"container"} ${cls.wrapper}`}>
      <div className={cls.modalContainer}>
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
            onClick={() => {
              console.log("🥂");
              handleClose();
            }}
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
      </div>
    </div>
  );
}
