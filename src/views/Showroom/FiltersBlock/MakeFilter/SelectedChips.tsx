import CloseSvg from "../../../../../public/icons/close.svg";
import cls from "./styles.module.scss";

interface Props {
  selected: string[];
  onToggle: (make: string) => void;
}

export default function SelectedChips({ onToggle, selected }: Props) {
  return (
    <ul className={cls.selectedList}>
      {selected.map((make) => (
        <li key={make} className={cls.selectedItem}>
          <p className={cls.selectedItemTxt}> {make} </p>
          <CloseSvg onClick={() => onToggle(make)} className={cls.svg} />
        </li>
      ))}
    </ul>
  );
}
