"use client";

import { useEffect, useState } from "react";

import { CarProps } from "@/shared/types/car";

// import { temporaryData } from "./Gallery/temporaryData";
import FiltersBlock from "./FiltersBlock/FiltersBlock";
import Gallery from "./Gallery/Gallery";
import Pagination from "./Pagination/Pagination";
import Tabs from "./Tabs/Tabs";
import SortComponent from "./SortComponent/SortComponent";

import cls from "./styles.module.scss";

const ITEMS_PER_PAGE = 12;

const convertPriceToNumber = (price: string): number => {
  const numericString = price.replace(/^R\s?|\,.*/g, "");
  return parseFloat(numericString);
};

//@ts-expect-error
const filterFromRange = (data, filters)=> {
  //@ts-expect-error
  const priceFilteredData = data.filter(item => {
    const price = convertPriceToNumber(item.price);
        return price >= filters.price.min && price <= filters.price.max
  });
  // console.log(data)
  // console.log(filters)
  //@ts-expect-error
  const kmFilteredData = priceFilteredData.filter(item => {
    return item.km >= filters.kilometers.min && item.km <= filters.kilometers.max
  })
//@ts-expect-error
  const yearFilteredData = kmFilteredData.filter(item => {
    return item.year >= filters.year.min && item.year <= filters.year.max
  })

  return yearFilteredData;
}

//@ts-expect-error
const filterFromMakes = (data, makes)=> {
  //@ts-expect-error
  if(makes.length) return data.filter(item => {
    const {make} = item;
    return makes.includes(make);
  })
  return data;
}

//@ts-expect-error
const filterFromFuelTypes = (data, fuelTypes)=> {
  //@ts-expect-error
  if(fuelTypes.length) return data.filter(item => {
    return fuelTypes.includes(item.fuel.toLowerCase());
  })
  return data;
}

//@ts-expect-error
const filterFromTransmission = (data, transmissions)=> {
  //@ts-expect-error
  if(transmissions.length) return data.filter(item => {
    return transmissions.includes(item.transmission.toLowerCase());
  })
  return data;
}

const defaultMultirangeValues = {
  price: { min: 0, max: 230000 },
  kilometers: { min: 0, max: 500000 },
  year: { min: 1990, max: 2025 },
};

//@ts-expect-error
export default function ShowroomView({data, filters}) {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAscending, setIsAscending] = useState<boolean | null>(null);
  const [multirangeValues, setMultirangeValues] = useState(
      defaultMultirangeValues
  );
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>(
      []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleSort = (): void => {
    if (isAscending === null) {
      setIsAscending(true);
    } else {
      setIsAscending((prev) => !prev);
    }
  };

  const sortedData: CarProps[] =
    isAscending === null
      ? [...data]
      : [...data].sort((a, b) => {
          const priceA = convertPriceToNumber(a.price);
          const priceB = convertPriceToNumber(b.price);

          return isAscending ? priceA - priceB : priceB - priceA;
        });

  const filteredData =
    activeTab === "all"
      ? sortedData
      : sortedData.filter((item) => item.type === activeTab);

  const rangeFilteredData = filterFromRange(filteredData, multirangeValues);

  const makeFilteredData = filterFromMakes(rangeFilteredData, selectedMakes);

  const fuelTypesFilteredData = filterFromFuelTypes(makeFilteredData, selectedFuelTypes);

  const transmissionFilteredData = filterFromTransmission(fuelTypesFilteredData, selectedTransmission);

  const totalPages = Math.ceil(transmissionFilteredData.length / ITEMS_PER_PAGE);
  const paginatedData = transmissionFilteredData.slice(
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
          <FiltersBlock
              filters={filters}
              setSelectedTransmission={setSelectedTransmission}
              setSelectedFuelTypes={setSelectedFuelTypes}
              setSelectedMakes={setSelectedMakes}
              setMultirangeValues={setMultirangeValues}
              selectedTransmission={selectedTransmission}
              selectedFuelTypes={selectedFuelTypes}
              selectedMakes={selectedMakes}
              multirangeValues={multirangeValues} />
          <SortComponent onSort={handleSort} isLowestToHighest={isAscending} />
        </div>
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
