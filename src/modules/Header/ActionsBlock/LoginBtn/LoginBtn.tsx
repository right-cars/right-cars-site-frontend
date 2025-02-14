"use client";
import { useState } from "react";
import Image from "next/image";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import SignIn from "@/modules/AuthForms/SignIn/SignIn";
import SignUp from "@/modules/AuthForms/SignUp/SignUp";
import VerifyingPopup from "@/shared/components/Popups/VerifyingPopup";
import ForgotPasswordPopup from "@/shared/components/Popups/ForgotPasswordPopup";
import PasswordRequest from "@/shared/components/Popups/PasswordRequest";
import SuccessResetPassword from "@/shared/components/Popups/SuccessReaetPassword";
import cls from "../styles.module.scss";

export default function LoginBtn() {
  const signIn = false;
  const userName = "temp name";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupEmail, setPopupEmail] = useState<string | null>(null);
  const [popupForgotPassword, setPopupForgotPassword] = useState(false);
  const [popupPasswordRequest, setPopupPasswordRequest] = useState(false);
  const [successResetPopup, setSuccessResetPopup] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        type="button"
        className={cls.loginBtn}
      >
        <Image src="/icons/user.svg" alt="login icon" width={29} height={22} />
        <h6 className={cls.name}>{signIn ? userName : "Login"}</h6>
      </button>
      {isModalOpen && (
        <ModalWindow setIsModalOpen={setIsModalOpen} closeBtn={false}>
          {isSignIn ? (
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
      )}
      {popupEmail && (
        <ModalWindow setIsModalOpen={() => setPopupEmail(null)}>
          <VerifyingPopup email={popupEmail} />
        </ModalWindow>
      )}

      {popupForgotPassword && (
        <ModalWindow setIsModalOpen={setPopupForgotPassword}>
          <ForgotPasswordPopup
            setPopupOpen={setPopupForgotPassword}
            setPasswordRequestOpen={setPopupPasswordRequest}
          />
        </ModalWindow>
      )}

      {popupPasswordRequest && (
        <ModalWindow setIsModalOpen={setPopupPasswordRequest}>
          <PasswordRequest
            setPopupOpen={setPopupPasswordRequest}
            setSuccessPopupOpen={setSuccessResetPopup}
          />
        </ModalWindow>
      )}

      {successResetPopup && (
        <ModalWindow setIsModalOpen={setSuccessResetPopup}>
          <SuccessResetPassword
            setPopupOpen={setSuccessResetPopup}
            setSignInOpen={setIsModalOpen}
          />
        </ModalWindow>
      )}
    </>
  );
}
