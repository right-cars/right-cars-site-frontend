"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import LikeSvg from "../../../../../public/icons/home/car-card/like.svg";
import cls from "./styles.module.scss";

interface FavoriteButtonProps {
  id: string;
    reserved?: boolean;
  isCarPage?: boolean;
  onRemoveFavorite?: (id: string) => void 
}

export default function FavoriteBtn({ id, reserved, isCarPage, onRemoveFavorite }: FavoriteButtonProps )  {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId: string) => favId !== id);
      onRemoveFavorite?.(id); 
    } else {
      updatedFavorites = [...favorites, id];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite} className={`${cls.favoriteBtn} ${isCarPage && cls.backgrounfBtn}`}>
      {!reserved && (
        <LikeSvg
          className={cls.absoluteSvg}
          style={{ fill: isFavorite ? "v.$primary" : "transparent" }}
        />
      )}
      {reserved && (
        <Image
          src="/icons/home/car-card/reserved.svg"
          alt="reserved icon"
          width={72}
          height={16}
          className={cls.reserved}
        />
      )}
    </button>
  );
}

