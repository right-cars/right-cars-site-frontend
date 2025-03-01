"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import Filters from "./Filters";

import cls from "./styles.module.scss";

export default function FiltersBlock() {
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
      const isSmallScreen = window.innerWidth <= 989;
      setIsTablet(isSmallScreen);
      setIsFilterVisible(!isSmallScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      {isFiltersVisible && <Filters setIsFilterVisible={setIsFilterVisible} isTablet={isTablet}/>}
    </div>
  );
}
