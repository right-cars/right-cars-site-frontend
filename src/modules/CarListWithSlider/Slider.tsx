"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { CarProps } from "@/shared/types/car";
import CarCard from "@/shared/components/CarCard/CarCard";

import cls from "./styles.module.scss";

export default function Slider({ data }: { data: CarProps[] }) {
  return (
    <Swiper
      slidesPerView={2.3}
      slidesOffsetBefore={15}
      spaceBetween={16}
      loop
      breakpoints={{
        421: {
          slidesPerView: 1.8,
        },
        769: {
          slidesPerView: 2.75,
        },

        1025: {
          slidesOffsetBefore: 0,
          slidesPerView: 4,
          loop:false
        },
      }}
      className={cls.slider}
    >
      {data.slice(0, 4).map(
        ({
          // href,
          img,
          year,
          make,
          model,
          price,
          mileage,
          transmission,
          id,
        }) => (
          <SwiperSlide key={id}>
            <CarCard
              // href={href}
              href={`/showroom/${id}`}
              img={img}
              year={year}
              price={price}
              mileage={mileage}
              make={make}
              model={model}
              transmission={transmission}
              id={id}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
