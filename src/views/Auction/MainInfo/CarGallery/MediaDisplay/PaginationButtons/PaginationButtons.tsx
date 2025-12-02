import Image from "next/image";

import cls from "../styles.module.scss";

const PaginationButtons = ({ handlePrev, handleNext }: { handlePrev: (e: React.MouseEvent<HTMLButtonElement>) => void, handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
  <>
    <button className={cls.prevBtn} onClick={handlePrev}>
      <Image
        src="/icons/car-page/arrow-circle-left.svg"
        alt="previous icon"
        width={36}
        height={36}
      />
    </button>
    <button className={cls.nextBtn} onClick={handleNext}>
      <Image
        src="/icons/car-page/arrow-circle-left.svg"
        alt="next icon"
        width={36}
        height={36}
        style={{ transform: "scale(-1)" }}
      />
    </button>
  </>
);

export default PaginationButtons;
