"use client";

import { motion } from "framer-motion";

import { CarProps } from "@/shared/types/car";
import CarCard from "@/shared/components/CarCard/CarCard";

import { listVariants } from "@/helpers/animation";

import cls from "./styles.module.scss";

interface GalleryProps {
  data: CarProps[];
  currentPage: number;
  activeTab: string;
}

export default function Gallery({ data, currentPage, activeTab }: GalleryProps) {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      key={`${currentPage}-${activeTab}`}
      className={cls.gallery}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listVariants}
    >
      {data.map((car) => (
        <motion.div key={car.id} variants={cardVariants}>
          <CarCard
            id={car.id}
            img={car.img}
            year={car.year}
            make={car.make}
            model={car.model}
            price={car.price}
            mileage={car.mileage}
            transmission={car.transmission}
            href={`/showroom/${car.id}`}
            reserved={car.reserved}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
