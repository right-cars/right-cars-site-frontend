"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

interface Props {
  setPopupOpen: (isOpen: string | null) => void;
  email: string | null;
}

export default function VerifyingPopup({ email, setPopupOpen }: Props) {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      // router.push("account/complete-profile");
      router.push("/");
      setPopupOpen(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [router, setPopupOpen]); //тимчасова штука

  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>verifying your email addres</h2>
      <p className={`${"text"} ${cls.txt}`}>a verification email was sent to </p>
      <p className="titleSmall"
        style={{ color: "#5120B8", fontWeight: 700, display: "inline" }}
      >
        {email}
      </p>
      <p className="textMedium" style={{ marginTop: 8, marginBottom: 32 }}>
        Click on the link sent to your email to verify your account
      </p>
      <Button
        text="resend verification email"
        color="transparent"
        onClick={() => {
          console.log("🍾");
        }}
      />
    </div>
  );
}
