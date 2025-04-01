"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Button from "@/shared/components/Buttons/Button/Button";
import MultiRangeSlider from "@/shared/components/MultiRangeSlider/MultiRangeSlider";

import MakeFilter from "./MakeFilter/MakeFilter";
import SelectFilter from "./SelectFilter/SelectFilter";

import makes from "./makes";

import cls from "./styles.module.scss";

interface FilterProps {
  isFilterVisible: boolean;
  setSelectedTransmissionFunc: () => void;
  setMultirangeValuesFunc: () => void;
  setSelectedMakesFunc: () => void;
  setSelectedFuelTypesFunc: () => void;
  setIsFilterVisible: (visible: boolean) => void;
  isTablet: boolean;
}

const defaultMultirangeValues = {
  price: { min: 0, max: 230000 },
  kilometers: { min: 0, max: 500000 },
  year: { min: 1990, max: 2025 },
};

// const makes = ["audi", "bmw", "chevrolet", "citroen", "daihatsu", "nissan"];

export default function Filters({
  setIsFilterVisible,
  setSelectedTransmissionFunc,
  setSelectedFuelTypesFunc,
  setSelectedMakesFunc,
  setMultirangeValuesFunc,
  isTablet,
  isFilterVisible,
}: FilterProps) {
  const [multirangeValues, setMultirangeValues] = useState(
    defaultMultirangeValues
  );

  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>(
    []
  );

  const [openFilter, setOpenFilter] = useState<string | null>(null);

  useEffect(() => {
    // @ts-expect-error
    setMultirangeValuesFunc(multirangeValues);
  }, [multirangeValues]);

  useEffect(() => {
    // @ts-expect-error
    setSelectedMakesFunc(selectedMakes);
  }, [selectedMakes]);

  useEffect(() => {
    // @ts-expect-error
    setSelectedFuelTypesFunc(selectedFuelTypes);
  }, [selectedFuelTypes]);

  useEffect(() => {
    // @ts-expect-error
    setSelectedTransmissionFunc(selectedTransmission);
  }, [selectedTransmission]);

  const toggleSelectFilter = (filter: string) => {
    setOpenFilter((prev) => (prev === filter ? null : filter));
  };

  const handleRangeChange = (
    multirangeKey: keyof typeof multirangeValues,
    newValues: { min: number; max: number }
  ) => {
    setMultirangeValues((prev) => {
      if (
        prev[multirangeKey].min === newValues.min &&
        prev[multirangeKey].max === newValues.max
      ) {

        return prev;
      }

      return { ...prev, [multirangeKey]: newValues };
    });
  };

  const handleClear = (multirangeKey: keyof typeof multirangeValues) => {
    setMultirangeValues((prev) => ({
      ...prev,
      [multirangeKey]: defaultMultirangeValues[multirangeKey],
    }));
  };

  const handleClearAll = () => {
    setMultirangeValues(defaultMultirangeValues);
    setSelectedMakes([]);
    setSelectedFuelTypes([]);
    setSelectedTransmission([]);
    setOpenFilter(null);

    if (isTablet) setIsFilterVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, zIndex:-1 }}
      animate={{
        opacity: isFilterVisible ? 1 : 0,
        y: isFilterVisible ? 0 : -10,
        zIndex:0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cls.container}
    >
      <div className={cls.filtersWrapp}>
        <MultiRangeSlider
          handleClear={() => handleClear("price")}
          min={0}
          max={230000}
          step={1000}
          value={multirangeValues.price}
          onChange={(values) => handleRangeChange("price", values)}
          title="Price"
          textBefore="r "
        />
        <MultiRangeSlider
          handleClear={() => handleClear("kilometers")}
          min={0}
          max={500000}
          step={10000}
          value={multirangeValues.kilometers}
          onChange={(values) => handleRangeChange("kilometers", values)}
          title="kilometers"
          textAfter=" km"
        />
        <MultiRangeSlider
          handleClear={() => handleClear("year")}
          min={1990}
          max={2025}
          step={1}
          value={multirangeValues.year}
          onChange={(values) => handleRangeChange("year", values)}
          title="year"
        />
        <MakeFilter
          options={makes}
          selected={selectedMakes}
          onChange={setSelectedMakes}
          onClear={() => setSelectedMakes([])}
        />
        <SelectFilter
          title="Fuel type"
          options={["diesel", "petrol", "hybrid"]}
          selected={selectedFuelTypes}
          onChange={setSelectedFuelTypes}
          onClear={() => setSelectedFuelTypes([])}
          isOpen={openFilter === "fuel"}
          onToggleOpen={() => toggleSelectFilter("fuel")}
        />
        <SelectFilter
          title="Transmission"
          options={["manual", "automatic"]}
          selected={selectedTransmission}
          onChange={setSelectedTransmission}
          onClear={() => setSelectedTransmission([])}
          isOpen={openFilter === "transmission"}
          onToggleOpen={() => toggleSelectFilter("transmission")}
        />
      </div>
      <div className={cls.btnsWrapp}>
        <Button
          text="clear filters"
          color="transparent"
          onClick={handleClearAll}
        />
        <div className={cls.btnWrapp}>
          <Button
            text="apply filters"
            onClick={() => {
              if (isTablet) {
                setIsFilterVisible(false);
              }
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
