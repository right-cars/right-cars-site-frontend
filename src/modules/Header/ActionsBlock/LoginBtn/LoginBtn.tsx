"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import ForgotPasswordPopup from "@/shared/components/Popups/ForgotPasswordPopup";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import PasswordRequest from "@/shared/components/Popups/PasswordRequest";
import SuccessResetPassword from "@/shared/components/Popups/SuccessResetPassword";
import VerifyingPopup from "@/shared/components/Popups/VerifyingPopup";

import SignIn from "@/modules/AuthForms/SignIn/SignIn";
import SignUp from "@/modules/AuthForms/SignUp/SignUp";

import cls from "../styles.module.scss";

export default function LoginBtn({ userName, isLoggedIn }: { userName: string, isLoggedIn: boolean }) {

  // const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupEmail, setPopupEmail] = useState<string | null>(null);
  const [popupForgotPassword, setPopupForgotPassword] = useState(false);
  const [popupPasswordRequest, setPopupPasswordRequest] = useState(false);
  const [successResetPopup, setSuccessResetPopup] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(true);

  const toggleForm = () => {
    setIsSignInOpen((prev) => !prev);
  };

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    }
    // router.push("/account");

    if (typeof window !== "undefined") {
      const sidebarState = localStorage.getItem("sidebarOpen") === "true";
      localStorage.setItem("sidebarOpen", String(!sidebarState));
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <>
        {isLoggedIn && <Link href="/account" className={cls.loginBtn}>
            <Image src="/icons/user.svg" alt="login icon" width={29} height={22} />
            <p className={cls.name}>{isLoggedIn ? userName : "Login"}</p>
        </Link>}
    {!isLoggedIn && <button onClick={handleLoginClick} type="button" className={cls.loginBtn}>
        <Image src="/icons/user.svg" alt="login icon" width={29} height={22} />
        <p className={cls.name}>Login</p>
      </button>}
      <ModalWindow
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeBtn={false}
      >
        {isSignInOpen ? (
          <SignIn
            toggleForm={toggleForm}
            setSigninOpen={setIsModalOpen}
            setPasswordPopupOpen={setPopupForgotPassword}
          />
        ) : (
          <SignUp
            toggleForm={toggleForm}
            setPopupOpen={setPopupEmail}
            setSignUpOpen={setIsModalOpen}
          />
        )}
      </ModalWindow>

      <ModalWindow
        isModalOpen={Boolean(popupEmail)}
        setIsModalOpen={() => setPopupEmail(null)}
      >
        <VerifyingPopup email={popupEmail} setPopupOpen={setPopupEmail} />
      </ModalWindow>

      <ModalWindow
        isModalOpen={popupForgotPassword}
        setIsModalOpen={setPopupForgotPassword}
      >
        <ForgotPasswordPopup
          setPopupOpen={setPopupForgotPassword}
          setPasswordRequestOpen={setPopupPasswordRequest}
        />
      </ModalWindow>

      <ModalWindow
        isModalOpen={popupPasswordRequest}
        setIsModalOpen={setPopupPasswordRequest}
      >
        <PasswordRequest
          // setPopupOpen={setPopupPasswordRequest}
          // setSuccessPopupOpen={setSuccessResetPopup}
        />
      </ModalWindow>

      <ModalWindow
        isModalOpen={successResetPopup}
        setIsModalOpen={setSuccessResetPopup}
      >
        <SuccessResetPassword
          setPopupOpen={setSuccessResetPopup}
          setSignInOpen={setIsModalOpen}
        />
      </ModalWindow>
    </>
  );
}
