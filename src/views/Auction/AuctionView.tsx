"use client";

import { useEffect, useState } from "react";

// import { temporaryData } from "./Gallery/temporaryData";
import Gallery from "./Gallery/Gallery";
import Pagination from "./Pagination/Pagination";
import Tabs from "./Tabs/Tabs";

import cls from "./styles.module.scss";

const ITEMS_PER_PAGE = 12;

// const convertPriceToNumber = (price: string): number => {
//   const numericString = price.replace(/^R\s?|\,.*/g, "");
//   return parseFloat(numericString);
// };

//@ts-expect-error
export default function AuctionView({data}) {
  const [activeTab, setActiveTab] = useState("ending soon");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);


  const filteredData =
    activeTab === "ending soon"
      ? data
      //@ts-expect-error
      : data.filter((item) => item.type === activeTab);

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
        <div className={cls.content}>
          <Gallery
            data={paginatedData}
            currentPage={currentPage}
            activeTab={activeTab}
          />
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
