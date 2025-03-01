import Image from "next/image";

import cls from "./styles.module.scss";

export default function ClearBtn({ handleClear }: { handleClear: () => void }) {
  return (
    <button className={cls.clearBtn} onClick={handleClear}>
      <p className="textSmall">clear</p>
      <Image
        src="/icons/closeDark.svg"
        alt="close icon"
        width={12}
        height={12}
      />
    </button>
  );
}
