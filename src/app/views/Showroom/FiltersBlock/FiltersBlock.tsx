import Image from "next/image";
import cls from "./styles.module.scss";
import { useEffect, useState } from "react";
import Filters from "./Filters";

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
        <h4>filter my search</h4>
      </button>
      <button className={cls.filterBtn} onClick={handleFilterClick}>
        <Image
          src="/icons/showroom/filter.svg"
          alt="sort svg"
          width={24}
          height={24}
        />
      </button>
      {isFiltersVisible && <Filters />}
    </div>
  );
}
