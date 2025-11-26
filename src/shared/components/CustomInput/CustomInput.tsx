"use client";

import { useState } from "react";
import Image from "next/image";
import { InputMask } from "@react-input/mask";

import { CustomInputProps } from "@/shared/types/customInput";

import cls from "./styles.module.scss";

export default function CustomInput(props: CustomInputProps) {
  const {
    value,
    handleChange,
    id,
    label,
    required,
    placeholder,
    password,
    phone,
    bordered,
    disabled,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  let mask = "";
  if (id === "vehicleYear") {
    mask = "____";
  } else if (id === "currentVehicleKilometers") {
    mask = "______";
  } else if (id === "vehicleServiceDueDate") {
    mask = "__/__/____";
  } else if (phone) {
    mask = "+27___ ___-__-__";
  }

  return (
    <div className={cls.inputContainer}>
      <label htmlFor={id} className={`${"textTiny"} ${cls.label}`}>
        {label}{" "}
        {required && (
          <span className="textTiny" style={{ color: "#EC531C" }}>
            *
          </span>
        )}
      </label>
      {mask ? (
        <InputMask
          mask={mask}
          replacement={{ _: /\d/ }}
          className={`${cls.input} ${bordered && cls.borderedInput}`}
          onChange={handleChange}
          id={id}
          name={id}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      ) : (
        <input
          className={`${cls.input} ${bordered && cls.borderedInput}`}
          onChange={handleChange}
          id={id}
          type={password && !showPassword ? "password" : "text"}
          name={id}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      )}
      {password && (
        <button
          type="button"
          className={cls.togglePassword}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <Image src="/icons/eye.svg" alt="icon" width={24} height={24} />
          ) : (
            <Image src="/icons/eye-off.svg" alt="icon" width={24} height={24} />
          )}
        </button>
      )}
    </div>
  );
}
