import Checkbox from "@/shared/components/Checkbox/Checkbox";
import cls from "./styles.module.scss";

interface Props {
  title: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function CheckboxBlock({
  title,
  options,
  selected,
  onChange,
}: Props) {
  const handleToggle = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];

    onChange(newSelected);
  };

  return (
    <div>
      <h4 style={{ marginBottom: 16 }}>{title}</h4>
      <ul className={cls.options}>
        {options.map((option) => (
          <li key={option} className={cls.option}>
            <Checkbox
              label={option}
              checked={selected.includes(option)}
              onToggle={() => handleToggle(option)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
