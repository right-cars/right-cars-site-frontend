import Image from "next/image";

import Checkbox from "@/shared/components/Checkbox/Checkbox";
import ClearBtn from "@/shared/components/Buttons/ClearBtn/ClearBtn";

import cls from "./styles.module.scss";

interface SelectFilterProps {
  title: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  onClear: () => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export default function SelectFilter({
  title,
  options,
  selected,
  onChange,
  onClear,
  isOpen,
  onToggleOpen,
}: SelectFilterProps) {
  const handleToggle = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];

    onChange(newSelected);
  };

  return (
    <div>
      <div className={cls.header} onClick={onToggleOpen}>
        <h5 className={cls.title}>{title}</h5>
        <div className={cls.btnsWrapp}>
          {selected.length > 0 && <ClearBtn handleClear={onClear} />}
          <Image
            src="/icons/arrow.svg"
            alt="arrow icon"
            width={16}
            height={16}
            className={`${cls.svg} ${isOpen && cls.openSvg}`}
          />
        </div>
      </div>

      {isOpen && (
        <ul className={cls.options}>
          {options.map((option) => (
            <li key={option}>
              <Checkbox
                label={option}
                checked={selected.includes(option)}
                onToggle={() => handleToggle(option)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
