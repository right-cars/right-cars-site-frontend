import Image from "next/image";
import Link from "next/link";

import { CarProps } from "@/shared/types/car";
import FavoriteBtn from "@/shared/components/Buttons/FavoriteBtn/FavoriteBtn";

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
    onRemoveFavorite
  } = props;

  return (
    <div className={cls.wrapp}>
    <FavoriteBtn id={id} reserved={reserved} onRemoveFavorite={onRemoveFavorite}/>
      <div className={cls.imgBlock}>
        <Image
          src={img}
          alt={model}
          width={336}
          height={204}
          className={cls.img}
        />
      </div>
      <Link href={href} className={cls.firstInfo}>
        <p className="titleSmall">{year}</p>
        <div className={cls.modelWrap}>
          <p className="btnText">
            {make} {model}
          </p>
          <Image
            src="/icons/home/car-card/arrow.svg"
            alt="arrow icon"
            width={18}
            height={18}
            className={cls.arr}
          />
        </div>
      </Link>
      <div className={cls.secondInfo}>
        <p className="titleMedium">{price}</p>
        <ul className={cls.chips}>
          <li className={cls.chip}>
            <p className="textSmall">{mileage}</p>
          </li>
          <li className={cls.chip}>
            <p className="textSmall">{transmission}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
