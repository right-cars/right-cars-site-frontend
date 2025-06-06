"use client"

import { ChangeEvent, FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

import Button from "@/shared/components/Buttons/Button/Button";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

// import GoogleBtn from "./GoogleBtn/GoogleBtn";

import {login} from "@/api/auth";
import {setAuthToken} from "@/shared/utils/storageEvents";

import cls from "../styles.module.scss";

interface SigninProps {
  toggleForm: () => void;
  setPasswordPopupOpen: (isOpen: boolean) => void;
  setSigninOpen: (isOpen: boolean) => void;
}

export default function SignIn({
  toggleForm,
  setSigninOpen,
  setPasswordPopupOpen,
}: SigninProps) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  // const router = useRouter();
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      setAuthToken(data.accessToken);
      setSigninOpen(false);
    }
    catch(error) {
      //@ts-expect-error
      setError(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <div className={cls.formWrapp}>
      <h2 style={{ marginBottom: 32 }}>please log in to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className={cls.inputsWrapp}>
          <CustomInput
            value={formData.email}
            label="email adress"
            required
            id="email"
            handleChange={handleChange}
          />
          <CustomInput
            password
            value={formData.password}
            label="password"
            required
            id="password"
            handleChange={handleChange}
          />
        </div>
        <p
          className={cls.forgotTxt}
          onClick={() => {
            setSigninOpen(false);
            setPasswordPopupOpen(true);
          }}
        >
          forgot password
        </p>
        {error && <p className={cls.error}>{error}</p>}
        <Button type="submit" text="log in" />
      </form>
      {/*<div style={{ marginTop: 12, marginBottom: 32 }}>*/}
      {/*  <GoogleBtn />*/}
      {/*</div>*/}
      <p className="btnText" style={{ marginBottom: 32, marginTop: 32 }}>
        DONʼT HAVE AN ACCOUNT?
      </p>
      <Button text="sign up" color="transparent" onClick={toggleForm} />
    </div>
  );
}
