import Image from "next/image";
import Link from "next/link";

import { CarProps } from "@/shared/types/car";
import FavoriteBtn from "@/shared/components/Buttons/FavoriteBtn/FavoriteBtn";

import ArrowIcon from "@icons/home/car-card/arrow.svg";

import cls from "./styles.module.scss";

export default function CarCard(props: CarProps) {
  const {
    href,
    img,
    year,
    make,
    model,
    price,
    mileage,
    transmission,
    id,
    reserved,
    onRemoveFavorite,
  } = props;

  return (
    <div className={cls.wrapp}>
      <FavoriteBtn
        id={id}
        reserved={reserved}
        onRemoveFavorite={onRemoveFavorite}
      />
      <Link href={href}>
        <div className={cls.imgBlock}>
          <Image
            src={img}
            alt={model}
            width={336}
            height={204}
            className={cls.img}
            unoptimized
          />
        </div>
        <div className={cls.firstInfo}>
          <p className="titleSmall">{year}</p>
          <div className={cls.modelWrap}>
            <p className={`btnText ${cls.title}`}>
              {make} {model}
            </p>
            <ArrowIcon width={18} height={18} className={cls.arr} />
          </div>
        </div>
        <div className={cls.secondInfo}>
          <p className="titleMedium">
            R {Number(price.split(",")[0]).toLocaleString("en-US")}
          </p>
          <ul className={cls.chips}>
            <li className={cls.chip}>
              <p className="textSmall">{mileage}km</p>
            </li>
            <li className={cls.chip}>
              <p className="textSmall">{transmission}</p>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
