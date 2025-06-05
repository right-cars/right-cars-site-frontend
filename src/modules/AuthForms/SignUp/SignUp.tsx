"use client"

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/shared/components/Buttons/Button/Button";
import CustomInput from "@/shared/components/CustomInput/CustomInput";

import Tooltip from "./Tooltip/Tooltip";

import {register} from "@/api/auth";

import cls from "../styles.module.scss";

interface SignupProps {
  toggleForm: () => void;
  setPopupOpen: (isOpen: string) => void;
  setSignUpOpen: (isOpen: boolean) => void;
}

export default function SignUp({
  toggleForm,
  setPopupOpen,
  setSignUpOpen,
}: SignupProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    surname: "",
    phone: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const [showTooltip, setShowTooltip] = useState(false);

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
    // console.log("Form Data:", formData);
    try {
      const {phone, ...payload} = formData;
      await register({...payload, mobileNumber: phone});
      setSignUpOpen(false);
      setPopupOpen(formData.email ? formData.email : "test@mail");
    }
    catch(error) {
      //@ts-expect-error
      setError(error?.response?.data?.message || error?.message);
    }

  };

  return (
    <div className={cls.formWrapp}>
      <h2 style={{ marginBottom: 32 }}>please sign up to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className={cls.inputsWrapp}>
          <CustomInput
            value={formData.fullName}
            label="full name(s)"
            required
            id="fullName"
            handleChange={handleChange}
          />
          <CustomInput
            value={formData.surname}
            label="surname"
            required
            id="surname"
            handleChange={handleChange}
          />
          <CustomInput
            phone
            value={formData.phone}
            label="mobile number"
            required
            id="phone"
            handleChange={handleChange}
          />
          <CustomInput
            value={formData.email}
            label="email adress"
            required
            id="email"
            handleChange={handleChange}
          />
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <CustomInput
              password
              value={formData.password}
              label="password"
              required
              id="password"
              handleChange={handleChange}
            />
            {showTooltip && <Tooltip />}
          </div>
          <CustomInput
            password
            value={formData.confirmPassword}
            label="confirm the password"
            required
            id="confirmPassword"
            handleChange={handleChange}
          />
        </div>
        <p className="btnText" style={{ margin: "32px 0" }}>
          By clicking &ldquo;Sign up&rdquo;, I agree to the terms and
          <br className={cls.br} /> conditions and privacy policy
        </p>
        {error && <p className={cls.error}>{error}</p>}
        <Button type="submit" text="sign up" />
      </form>
      <p className="btnText" style={{ margin: "32px 0" }}>
        already have AN ACCOUNT?
      </p>
      <Button text="log in" color="transparent" onClick={toggleForm} />
    </div>
  );
}
