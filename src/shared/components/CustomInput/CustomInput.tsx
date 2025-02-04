import { CustomInputProps } from "@/shared/types/customInput";
import cls from "./styles.module.scss";

export default function CustomInput(props: CustomInputProps) {
  const { value, handleChange, id, label, required } = props;

  return (
    <div className={cls.inputContainer}>
      <label htmlFor={id} className={`${"textTiny"} ${cls.label}`}>
        {label}{" "}
        {required && (
          <span className="textTiny" style={{ color: "var(--error)" }}>
            *
          </span>
        )}
      </label>
      <input
        className={cls.input}
        onChange={handleChange}
        id={id}
        type="text"
        name={id}
        value={value}
        autoComplete="off"
      />
    </div>
  );
}
