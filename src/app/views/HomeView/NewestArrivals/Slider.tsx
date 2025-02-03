"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import cls from "./styles.module.scss";
import { CarProps } from "@/shared/types/car";
import CarCard from "@/shared/components/CarCard/CarCard";

export default function Slider({ data }: { data: CarProps[] }) {
  return (
    <Swiper
      slidesPerView={2.3}
      slidesOffsetBefore={40}
      spaceBetween={16}
      loop
      breakpoints={{
        551: {
          slidesPerView: 2.3,
        },
        769: {
          slidesPerView: 2.75,
          slidesOffsetBefore: 48,
        },

        1101: {
          slidesOffsetBefore: 0,
          slidesPerView: 4,
        },
      }}
      className={cls.slider}
    >
      {data.map(
        ({
          href,
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
              href={href}
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
