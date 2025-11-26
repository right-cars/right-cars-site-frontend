"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

import { CustomInputProps } from "@/shared/types/customInput";

import cls from "./styles.module.scss";

export default function CustomSelect({
  label,
  required,
  id,
  value,
  handleChange,
  options,
  placeholder,
  bordered,
}: CustomInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    const event = {
      target: { name: id, value: option } as EventTarget & HTMLSelectElement,
    } as ChangeEvent<HTMLSelectElement>;

    handleChange(event);
    setIsOpen(false);
  };

  return (
    <div className={cls.selectContainer}>
      <p className={`${"textTiny"} ${cls.label}`}>
        {label}{" "}
        {required && (
          <span className="textTiny" style={{ color: "#EC531C" }}>
            *
          </span>
        )}
      </p>

      {/* Стилізована обгортка */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${cls.select} ${bordered ? cls.borderedSelect : ""}`}
      >
        <div className={cls.selected}>
          {value || (
            <p style={{ color: "rgba(17, 24, 28, 0.5)" }}>{placeholder}</p>
          )}
        </div>

        <Image
          src="/icons/arrow.svg"
          alt="arrow icon"
          width={16}
          height={16}
          className={`${cls.svg} ${isOpen ? cls.openSvg : ""}`}
        />

        {/* Якщо відкритий, показуємо випадаючий список */}
        {isOpen && (
          <ul className={cls.dropdown}>
            {options?.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={cls.option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Нативний селект для валідації */}
      <select
        name={id}
        id={id}
        required={required}
        value={value}
        onChange={(e) => handleChange(e)}
        className={cls.nativeSelect}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
