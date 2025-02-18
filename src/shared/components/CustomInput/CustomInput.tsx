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
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={cls.inputContainer}>
      <label htmlFor={id} className={`${"textTiny"} ${cls.label}`}>
        {label}{" "}
        {required && (
          <span className="textTiny" style={{ color: "$error" }}>
            *
          </span>
        )}
      </label>
      {phone ? (
        <InputMask
          mask="+38 (0__) ___-__-__"
          replacement={{ _: /\d/ }}
          className={`${cls.input} ${bordered && cls.borderedInput}`}
          onChange={handleChange}
          id={id}
          name={id}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
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
