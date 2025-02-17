import Link from "next/link";
import cls from "./styles.module.scss";
import Image from "next/image";

export default function BackBtn() {
  return (
    <Link href={"/showroom"} className={cls.backLink}>
      <Image
        src="/icons/car-page/arrow-left.svg"
        alt="arrow icon"
        width={24}
        height={24}
      />
      <h6>back to search</h6>
    </Link>
  );
}
