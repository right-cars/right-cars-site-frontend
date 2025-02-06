import cls from "./styles.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

export default function Checkbox({ label, checked, onToggle }: CheckboxProps) {
  return (
    <div className={cls.checkbox}>
      <input
        id={label}
        type="checkbox"
        checked={checked}
        readOnly
        className={cls.hiddenInput}
        onClick={onToggle}
      />
      <label htmlFor={label} className="textSmall" style={{cursor:"pointer"}}>
        {label}
      </label>
    </div>
  );
}
