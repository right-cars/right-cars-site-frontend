"use client";
import { useState } from "react";
import Image from "next/image";
import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import SignIn from "@/modules/AuthForms/SignIn/SignIn";
import cls from "../styles.module.scss";
import SignUp from "@/modules/AuthForms/SignUp/SignUp";

export default function LoginBtn() {
  const signIn = false;
  const userName = "temp name";

  const [isModalOpen, setIsModalOpen] = useState(false);
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
          {isSignIn ? <SignIn toggleForm={toggleForm} /> : <SignUp toggleForm={toggleForm}/>}
        </ModalWindow>
      )}
    </>
  );
}
