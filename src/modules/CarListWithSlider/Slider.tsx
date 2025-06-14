"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { CarProps } from "@/shared/types/car";
import CarCard from "@/shared/components/CarCard/CarCard";

import cls from "./styles.module.scss";

export default function Slider({ data }: { data: CarProps[] }) {
  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    // visible: (i: number) => ({
    //   opacity: 1,
    //   y: 0,
    //   transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    // }),
      visible: {
          opacity: 1,
          y: 0,
      }
  };

  return (
    <Swiper
      slidesPerView={2.3}
      slidesOffsetBefore={15}
      spaceBetween={16}
      loop
      breakpoints={{
        421: { slidesPerView: 1.8 },
        769: { slidesPerView: 2.75 },
        1025: { slidesOffsetBefore: 0, slidesPerView: 4, loop: false },
      }}
      className={cls.slider}
    >
      {data.slice(0, 4).map((car, i) => (
        <SwiperSlide key={car.id}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideVariants}
            custom={i}
          >
            <CarCard
              href={`/showroom/${car.id}`}
              img={car.img}
              year={car.year}
              price={car.price}
              mileage={car.mileage}
              make={car.make}
              model={car.model}
              transmission={car.transmission}
              id={car.id}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
