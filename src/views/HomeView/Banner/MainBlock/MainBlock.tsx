import Image from "next/image";
import Link from "next/link";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

export default function MainBlock() {
  return (
    <div className={cls.mainBlock}>
      <Image
        src="/images/home/banner/img1.webp"
        alt="car"
        width={656}
        height={440}
        className={cls.bannerImg}
      />
      <div className={cls.bannerTxtBlock}>
        <p className="textLarge">
          explore our vast selection of quality used cars at unbeatable prices.
          Find the right car that fits your budget and lifestyle
        </p>
        <Link href={"/showroom"} className={cls.btnWrapp}>
          <Button text="Start Your Search" img="/icons/endContent.svg" />
        </Link>
      </div>
    </div>
  );
}
