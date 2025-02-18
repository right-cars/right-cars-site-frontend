"use client";
import { useEffect, useState } from "react";
import Button from "@/shared/components/Buttons/Button/Button";
import { data } from "./data";
import TeamCard from "./TeamCard";
import cls from "./styles.module.scss";

export default function TeamList() {
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState<number>(data.length);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 660) {
        setItemsToShow(3);
      } else if (window.innerWidth <= 1024) {
        setItemsToShow(4);
      } else {
        setItemsToShow(data.length);
      }
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const visibleData = showAll ? data : data.slice(0, itemsToShow);

  return (
    <>
      <ul className={cls.teamList}>
        {visibleData.map(({ img, position, name, descr }, index) => (
          <TeamCard
            key={index}
            img={img}
            position={position}
            name={name}
            descr={descr}
          />
        ))}
      </ul>
      <div className={cls.btn}>
        <Button
          text="view all team members"
          color="transparent"
          onClick={() => setShowAll(true)}
        />
      </div>
    </>
  );
}
