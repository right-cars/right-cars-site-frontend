"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import cls from "./styles.module.scss";

const tabsData = [
  { name: "all vehicles", type: "all" },
  { name: "Cars", type: "cars" },
  { name: "bakkie", type: "bakkie" },
  { name: "commercial", type: "commercial" },
];

export default function Tabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (type: string) => void;
}) {
  return (
    <div className={cls.container}>
      <Swiper
        slidesPerView={2.1}
        spaceBetween={16}
        breakpoints={{
          661: {
            slidesPerView: 4,
          },
        }}
        className={cls.tabsWrapp}
      >
        {tabsData.map(({ name, type }) => (
          <SwiperSlide
            key={type}
            className={`${cls.tab} ${activeTab === type ? cls.active : ""}`}
            onClick={() => setActiveTab(type)}
          >
            <h4>{name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
