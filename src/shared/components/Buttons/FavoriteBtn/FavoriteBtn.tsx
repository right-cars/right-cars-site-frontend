"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";

import LikeSvg from "@icons/home/car-card/like.svg";

import cls from "./styles.module.scss";

interface FavoriteButtonProps {
  id: string;
  reserved?: boolean;
  isCarPage?: boolean;
  onRemoveFavorite?: (id: string) => void;
}

export default function FavoriteBtn({ id, reserved, isCarPage, onRemoveFavorite }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId: string) => favId !== id)
      : [...favorites, id];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);

    if (favorites.includes(id)) {
      onRemoveFavorite?.(id);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={classNames(cls.favoriteBtn, { [cls.backgrounfBtn]: isCarPage })}
    >
      {reserved ? (
        <Image
          src="/icons/home/car-card/reserved.svg"
          alt="reserved icon"
          width={72}
          height={16}
          className={cls.reserved}
        />
      ) : (
        <LikeSvg className={cls.absoluteSvg} style={{ fill: isFavorite ? "#5120B8" : "transparent" }} />
      )}
    </button>
  );
}
