import Link from "next/link";
import Image from "next/image";

import cls from "./styles.module.scss";

export default function BackBtn() {
  return (
    <Link href={"/showroom"} className={cls.backLink}>
      <Image
        src="/icons/car-page/arrow-left.svg"
        alt="arrow icon"
        width={24}
        height={24}
      />
      <p className="text">back to search</p>
    </Link>
  );
}
