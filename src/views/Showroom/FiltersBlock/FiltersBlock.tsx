"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Filters from "./Filters";

import cls from "./styles.module.scss";

//@ts-expect-error
export default function FiltersBlock({setSelectedTransmission, setSelectedFuelTypes, setSelectedMakes, setMultirangeValues}) {
  const [isFiltersVisible, setIsFilterVisible] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

  const handleFilterClick = () => {
    if (isTablet) {
      setIsFilterVisible((prev) => !prev);
    }
    return;
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;

      const isSmallScreen = window.innerWidth <= 1024;
      setIsTablet(isSmallScreen);

      setIsFilterVisible(!isSmallScreen);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <div className={cls.wrapper}>
      <button className={cls.btn}>
        <p className="titleSmall">filter my search</p>
      </button>
      <button className={cls.filterBtn} onClick={handleFilterClick}>
        <Image
          src="/icons/showroom/filter.svg"
          alt="sort svg"
          width={24}
          height={24}
        />
      </button>

      <Filters
          setSelectedTransmissionFunc={setSelectedTransmission}
          setSelectedFuelTypesFunc={setSelectedFuelTypes}
          setSelectedMakesFunc={setSelectedMakes}
          setMultirangeValuesFunc={setMultirangeValues}
        isFilterVisible={isFiltersVisible}
        setIsFilterVisible={setIsFilterVisible}
        isTablet={isTablet}
      />
    </div>
  );
}
