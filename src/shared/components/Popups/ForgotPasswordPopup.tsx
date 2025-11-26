import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/shared/components/Buttons/Button/Button";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import {forgotPassword} from "@/api/auth";

import cls from "./styles.module.scss";

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface Props {
  setPopupOpen: (isOpen: boolean) => void;
  setPasswordRequestOpen: (isOpen: boolean) => void;
}

export default function ForgotPasswordPopup({setPopupOpen, setPasswordRequestOpen}:Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!emailRegexp.test(email)) {
      return setError("This is not email")
    }
    try {
      setError("");
      setIsSending(true);
      await forgotPassword({email});
      setIsSending(false);
      setPopupOpen(false)
      setPasswordRequestOpen(true)
    }
    catch(error) {
      //@ts-expect-error
      setError(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <div className={cls.wrapper}>
      <h2 style={{ marginBottom: 32 }}>FORGOT A PASSWORD?</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          value={email}
          label="email address"
          required
          id="email"
          handleChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <div style={{ marginTop: 32 }}>
          <Button disabled={isSending} type="submit" text="reset a password" />
        </div>
      </form>
    </div>
  );
}
