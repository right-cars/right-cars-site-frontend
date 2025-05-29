"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

import Filters from "./Filters";

import cls from "./styles.module.scss";

const defaultMultirangeValues = {
  price: { min: 0, max: 230000 },
  kilometers: { min: 0, max: 500000 },
  year: { min: 1990, max: 2025 },
};

//@ts-expect-error
export default function FiltersBlock({filters, setSelectedTransmission, setSelectedFuelTypes, setSelectedMakes, setMultirangeValues, selectedTransmission, selectedFuelTypes, selectedMakes, multirangeValues,
}) {
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

  const activeFiltersCount = useMemo(() => {
    let count = 0;

    if (selectedTransmission?.length) count++;
    if (selectedFuelTypes?.length) count++;
    if (selectedMakes?.length) count++;

    const isRangeChanged = ["price", "kilometers", "year"].some((key) => {
      return (
        //@ts-ignore
        multirangeValues[key]?.min !== defaultMultirangeValues[key].min ||
        //@ts-ignore
        multirangeValues[key]?.max !== defaultMultirangeValues[key].max
      );
    });

    if (isRangeChanged) count++;

    return count;
  }, [
    selectedTransmission,
    selectedFuelTypes,
    selectedMakes,
    multirangeValues,
  ]);

  console.log(activeFiltersCount);

  return (
    <div className={cls.wrapper}>
      <button className={cls.btn}>
        <p className="titleSmall">filter my search</p>
      </button>
      <div className={cls.iconWrapper} style={{ position: "relative" }}>
        {activeFiltersCount > 0 && (
          <span className={cls.badge}>{activeFiltersCount}</span>
        )}
        <button className={cls.filterBtn} onClick={handleFilterClick}>
          <Image
            src="/icons/showroom/filter.svg"
            alt="sort svg"
            width={24}
            height={24}
          />
        </button>
      </div>

      <Filters
          filters={filters}
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
