"use client";

import { useEffect, useState } from "react";

import { CarProps } from "@/shared/types/car";

import { temporaryData } from "./Gallery/temporaryData";
import FiltersBlock from "./FiltersBlock/FiltersBlock";
import Gallery from "./Gallery/Gallery";
import Pagination from "./Pagination/Pagination";
import Tabs from "./Tabs/Tabs";
import SortComponent from "./SortComponent/SortComponent";

import cls from "./styles.module.scss";

const ITEMS_PER_PAGE = 12;

export default function ShowroomView() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAscending, setIsAscending] = useState<boolean | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleSort = (): void => {
    if (isAscending === null) {
      setIsAscending(true);
    } else {
      setIsAscending((prev) => !prev);
    }
  };

  const convertPriceToNumber = (price: string): number => {
    const numericString = price.replace(/[^\d.-]/g, "");
    return parseFloat(numericString);
  };

  const sortedData: CarProps[] =
    isAscending === null
      ? [...temporaryData]
      : [...temporaryData].sort((a, b) => {
          const priceA = convertPriceToNumber(a.price);
          const priceB = convertPriceToNumber(b.price);

          return isAscending ? priceA - priceB : priceB - priceA;
        });

  const filteredData =
    activeTab === "all"
      ? sortedData
      : sortedData.filter((item) => item.type === activeTab);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={`${"section"} ${cls.wrapper}`}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container">
        <div className={cls.filtersWrapp}>
          <FiltersBlock />
          <SortComponent onSort={handleSort} isLowestToHighest={isAscending} />
        </div>
        <div className={cls.content}>
          <Gallery data={paginatedData} currentPage={currentPage} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </div>
    </section>
  );
}
