"use client"

// import { useEffect } from "react";

import cls from "./styles.module.scss";

// interface Props {
//   setPopupOpen: (isOpen: boolean) => void;
//   setSuccessPopupOpen: (isOpen: boolean) => void;
// }

export default function PasswordRequest() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPopupOpen(false);
  //     setSuccessPopupOpen(true);
  //   }, 2000);
  //
  //   return () => clearTimeout(timer);
  // }, [setPopupOpen, setSuccessPopupOpen]); // тимчасова штука

  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>PASSWORD request</h2>

      <p className="textMedium" style={{ marginTop: 8, marginBottom: 32 }}>
        Your password reset request has been submitted. You will receive an
        email with instructions on how to reset your password
      </p>
    </div>
  );
}
