"use client"

import { ChangeEvent, FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

import Button from "@/shared/components/Buttons/Button/Button";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

// import GoogleBtn from "./GoogleBtn/GoogleBtn";

import {resetPassword} from "@/api/auth";

import cls from "../styles.module.scss";

interface SigninProps {
  token: string | null;
  setPasswordSuccessResetPopupOpen: (isOpen: boolean) => void;
  closeModal: (isOpen: boolean) => void;
}

const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;


export default function ResetPasswordForm({
    token,
  closeModal,
   setPasswordSuccessResetPopupOpen,
}: SigninProps) {
  const [formData, setFormData] = useState({ newPassword: "" });
  // const router = useRouter()
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

    if(!passwordRegexp.test(formData.newPassword)) {
      return setError("password must have at least 6 characters, one upper case character, one lowe case character, one number and one special character");
    }

    try {
      await resetPassword({...formData, token});
      closeModal(false);
      setPasswordSuccessResetPopupOpen(true);
    }
    catch(error) {
      //@ts-expect-error
      setError(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <div className={cls.formWrapp}>
      <h2 style={{ marginBottom: 32 }}>Enter new password</h2>
      <form onSubmit={handleSubmit}>
        <div className={cls.inputsWrapp}>
          <CustomInput
            password
            value={formData.newPassword}
            label="new password"
            required
            id="newPassword"
            handleChange={handleChange}
          />
        </div>
        <div style={{marginBottom: "16px"}} />
        {error && <p className={cls.error}>{error}</p>}
        <Button type="submit" text="Create new password" />
      </form>
    </div>
  );
}
