"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarProps } from "@/shared/types/car";
import LikeSvg from "../../../../public/icons/home/car-card/like.svg";
import cls from "./styles.module.scss";

export default function CarCard(props: CarProps) {
  const { href, img, year, make, model, price, mileage, transmission, id } =
    props;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId: string) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={cls.wrapp}>
      <button onClick={toggleFavorite} className={cls.favoriteBtn}>
        <LikeSvg
          className={cls.absoluteSvg}
          style={{ fill: isFavorite ? "var(--purple)" : "transparent" }}
        />
      </button>
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
        <h4>{year}</h4>
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
        <h3>{price}</h3>
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
