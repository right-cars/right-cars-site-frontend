import { ChangeEvent } from "react";
import classNames from "classnames";

import cls from "./styles.module.scss";

interface CheckboxProps {
  id?: string;
  label: string;
  checked: boolean;
  onToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  variant?: "circle" | "square";
  type?: "checkbox" | "radio";
  radioName?: string;
  required?: boolean;
}

export default function Checkbox({
  label,
  checked,
  id,
  onToggle,
  variant = "circle",
  type = "checkbox",
  radioName,
  required = false,
}: CheckboxProps) {
  const inputId = id || label;
  const name = radioName || inputId;

  return (
    <div
      className={cls.checkbox}
      style={{ padding: variant === "square" ? 8 : undefined }}
    >
      <input
        id={inputId}
        value={inputId}
        name={name}
        type={type}
        checked={checked}
        required={required}
        className={classNames({
          [cls.hiddenInput]: variant === "circle",
          [cls.squareCheckbox]: variant === "square",
        })}
        onChange={onToggle}
      />
      <label
        htmlFor={inputId}
        className="textSmall"
        style={{ cursor: "pointer" }}
      >
        {label}
      </label>
    </div>
  );
}
