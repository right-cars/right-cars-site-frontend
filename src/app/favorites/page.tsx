"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Button from "@/shared/components/Buttons/Button/Button";
import CarCard from "@/shared/components/CarCard/CarCard";
import { CarProps } from "@/shared/types/car";

import { temporaryData } from "@/views/Showroom/Gallery/temporaryData";

import cls from "./styles.module.scss";

export default function Favorites() {
  const [favoriteCars, setFavoriteCars] = useState<CarProps[]>([]);

  const updateFavorites = () => {
    if (typeof window === "undefined") return;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const filteredCars = temporaryData.filter((car) =>
      favorites.includes(car.id)
    );
    setFavoriteCars(filteredCars);
  };

  useEffect(() => {
    updateFavorites();
 if (typeof window !== "undefined") {
      window.addEventListener("storage", updateFavorites);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", updateFavorites);
      }
    };
  }, []);

  const handleRemoveFavorite = (id: string) => {
    if (typeof window === "undefined") return;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = favorites.filter((favId: string) => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    updateFavorites();
  };

  return (
    <section className={`${"container section"} ${cls.wrapper}`}>
      {favoriteCars.length === 0 ? (
        <h2 className={cls.empty}>You have no favorite cars yet</h2>
      ) : (
        <div className={cls.favoritesWrap}>
          {favoriteCars.map((car) => (
            <CarCard
              key={car.id}
              {...car}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))}
        </div>
      )}
      <Link href={"/showroom"} className={cls.btnWrapp}>
        <Button text="search for more vehicles" />
      </Link>
    </section>
  );
}
