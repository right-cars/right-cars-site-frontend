import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/shared/components/Buttons/Button/Button";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import cls from "./styles.module.scss";

interface Props {
  setPopupOpen: (isOpen: boolean) => void;
  setPasswordRequestOpen: (isOpen: boolean) => void;
}

export default function ForgotPasswordPopup({setPopupOpen, setPasswordRequestOpen}:Props) {
  const [email, setEmail] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email for password reset:", email);
    setPopupOpen(false)
    setPasswordRequestOpen(true)
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
        <div style={{ marginTop: 32 }}>
          <Button type="submit" text="reset a password" />
        </div>
      </form>
    </div>
  );
}
