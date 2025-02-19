import { CustomInputProps } from "@/shared/types/customInput";

import cls from "./styles.module.scss";

export default function CustomTextarea(props: CustomInputProps) {
  const { value, handleChange, id, label } = props;
  return (
    <div className={cls.inputContainer}>
      <label htmlFor={id} className={`${"textTiny"} ${cls.label}`}>
        {label}
        <textarea
          className={cls.textarea}
          onChange={handleChange}
          id={id}
          name={id}
          value={value}
          autoComplete="off"
        />
      </label>{" "}
    </div>
  );
}
