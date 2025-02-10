import { ChangeEvent } from "react";
import cls from "./styles.module.scss";

interface CheckboxProps {
  id?: string;
  label: string;
  checked: boolean;
  onToggle: (e: ChangeEvent<HTMLInputElement>) => void;
  variant?: "circle" | "square";
  type?: "checkbox" | "radio";
  radioName?: string;
}

export default function Checkbox({
  label,
  checked,
  id,
  onToggle,
  variant = "circle",
  type = "checkbox",
  radioName,
}: CheckboxProps) {
  return (
    <div
      className={cls.checkbox}
      style={{ padding: variant === "square" ? 8 : "" }}
    >
      <input
        id={id ? id : label}
        value={id}
        name={radioName ? radioName : id ? id : label}
        type={type}
        checked={checked}
        className={variant === "circle" ? cls.hiddenInput : cls.squareCheckbox}
        onChange={onToggle}
      />
      <label
        htmlFor={id ? id : label}
        className="textSmall"
        style={{ cursor: "pointer" }}
      >
        {label}
      </label>
    </div>
  );
}
