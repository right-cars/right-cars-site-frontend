import { useState } from "react";
import Image from "next/image";
import Checkbox from "@/shared/components/Checkbox/Checkbox";
import ClearBtn from "@/shared/components/Buttons/ClearBtn/ClearBtn";
import SelectedChips from "./SelectedChips";
import cls from "./styles.module.scss";

interface MakeFilterProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  onClear: () => void;
}

export default function MakeFilter({
  options,
  selected,
  onChange,
  onClear,
}: MakeFilterProps) {
  const [search, setSearch] = useState("");

  const handleToggle = (make: string) => {
    if (selected.includes(make)) {
      onChange(selected.filter((item) => item !== make));
    } else {
      onChange([...selected, make]);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className={cls.header}>
        <h5 className={cls.title}>Make</h5>
        {selected.length > 0 && <ClearBtn handleClear={onClear} />}
      </div>

      <div className={cls.searchBox}>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={cls.searchInput}
        />
        <Image
          src="/icons/showroom/search.svg"
          alt="search"
          width={16}
          height={16}
          className={cls.searchIcon}
        />
      </div>

      {selected.length > 0 && (
        <SelectedChips selected={selected} onToggle={handleToggle} />
      )}

      <div className={cls.optionsList}>
        {filteredOptions.map((make) => (
          <Checkbox
            key={make}
            label={make}
            checked={selected.includes(make)}
            onToggle={() => handleToggle(make)}
          />
        ))}
      </div>
    </div>
  );
}
