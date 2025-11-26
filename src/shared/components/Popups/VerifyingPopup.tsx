"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

interface Props {
  setPopupOpen: (isOpen: string | null) => void;
  email: string | null;
}

import {resendConfirmEmail} from "@/api/auth";

export default function VerifyingPopup({ email, setPopupOpen }: Props) {
    const [resend, setResend] = useState<boolean | null>(false);
  const router = useRouter();
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   // router.push("account/complete-profile");
    //   router.push("/");
    //   setPopupOpen(null);
    // }, 2000);

    // return () => clearTimeout(timer);
  }, [router, setPopupOpen]); //тимчасова штука

    const resendEmail = async ()=> {
        try {
            await resendConfirmEmail({email});
            setResend(true);
        }
        catch(error) {
            console.log(error);
        }
    }

  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>verifying your email address</h2>
        <p className={`${"text"} ${cls.txt}`}>a verification email was {resend ? "resent" : "sent"} to <span className="titleSmall"
                                                                                     style={{
                                                                                         color: "#5120B8",
                                                                                         fontWeight: 700,
                                                                                         display: "inline"
                                                                                     }}
        >
        {email}
      </span></p>

        <p className="text">it may take up to 1 hour.</p>
        <p className="textMedium" style={{marginTop: 8, marginBottom: 32}}>
        Click on the link sent to your email to verify your account
      </p>
      <Button
        text="resend verification email"
        color="transparent"
        onClick={resendEmail}
      />
    </div>
  );
}
