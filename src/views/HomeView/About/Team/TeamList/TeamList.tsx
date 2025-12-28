"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Button from "@/shared/components/Buttons/Button/Button";
import { data } from "./data";
import TeamCard from "./TeamCard";
import cls from "./styles.module.scss";
import { listVariants } from "@/helpers/animation";

export default function TeamList() {
  const getInitialItemsToShow = () => {
    if (typeof window === "undefined") return data.length;
    if (window.innerWidth <= 660) return 3;
    if (window.innerWidth <= 1024) return 4;
    if (window.innerWidth > 1024) return 6;
    return data.length;
  };

  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(getInitialItemsToShow);

  useEffect(() => {
    const handleResize = () => {
      if (!showAll) {
        setItemsToShow(getInitialItemsToShow());
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [showAll]);

  const shouldShowButton = data.length > itemsToShow;

  let buttonText = "View all team members";
  if (shouldShowButton) {
    buttonText = showAll ? "Hide team members" : "View all team members";
  }

  return (
    <>
      <motion.ul
        className={cls.teamList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={listVariants}
      >
        {(showAll ? data : data.slice(0, itemsToShow)).map(
          ({ img, position, name, descr }, index) => (
            <TeamCard
              key={index}
              img={img}
              position={position}
              name={name}
              descr={descr}
              index={index}
            />
          )
        )}
      </motion.ul>

      {(itemsToShow < data.length) && (<div className={cls.btn}>
        <Button
          text={buttonText}
          color="transparent"
          onClick={() => setShowAll((prev) => !prev)}
        />
      </div>)}
    </>
  );
}
