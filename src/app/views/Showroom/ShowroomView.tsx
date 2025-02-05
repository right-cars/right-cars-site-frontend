"use client";
import { useState } from "react";
import Gallery from "./Gallery/Gallery";
import Pagination from "./Pagination/Pagination";
import Tabs from "./Tabs/Tabs";
import { temporaryData } from "./Gallery/temporaryData";
import cls from "./styles.module.scss";

const ITEMS_PER_PAGE = 3;

export default function ShowroomView() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData =
    activeTab === "all"
      ? temporaryData
      : temporaryData.filter((item) => item.type === activeTab);
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
          <Gallery data={paginatedData} />
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
