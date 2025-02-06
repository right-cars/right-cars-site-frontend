import Image from "next/image";
import cls from "./styles.module.scss";

interface SortComponentProps {
  onSort: () => void;
  isLowestToHighest: boolean | null;
}

export default function SortComponent({
  onSort,
  isLowestToHighest,
}: SortComponentProps) {
  return (
    <div className={cls.wrapper}>
      <button className={cls.sortBtn} onClick={onSort}>
        <h4>sort by price</h4>
        <Image
          src="/icons/showroom/sortSvg.svg"
          alt="sort icon"
          width={24}
          height={24}
        />
      </button>
      <p className={`${"textMedium"} ${cls.txt}`}>
        {isLowestToHighest===false ? "highest to lowest" : "lowest to highest"}
      </p>
    </div>
  );
}
