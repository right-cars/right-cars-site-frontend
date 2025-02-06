import cls from "./styles.module.scss";
import MultiRangeSlider from "@/shared/components/MultiRangeSlider/MultiRangeSlider";
import { useState, useCallback } from "react";

const defaultValues = {
  price: { min: 30000, max: 230000 },
  kilometers: { min: 0, max: 500000 },
  year: { min: 1990, max: 2024 },
};

export default function Filters() {
  const [filters, setFilters] = useState(defaultValues);

  const handleRangeChange = useCallback(
    (filterKey: keyof typeof filters, newValues: { min: number; max: number }) => {
      setFilters((prev) => {
        if (prev[filterKey].min === newValues.min && prev[filterKey].max === newValues.max) {
          return prev;
        }
        return { ...prev, [filterKey]: newValues };
      });
    },
    []
  );

  const handleClear = useCallback((filterKey: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [filterKey]: defaultValues[filterKey] }));
  }, []);

  return (
    <div className={cls.filtersWrapp}>
      <MultiRangeSlider
        handleClear={() => handleClear("price")}
        min={30000}
        max={230000}
        step={1000}
        value={filters.price}
        onChange={(values) => handleRangeChange("price", values)}
        title="Price"
        textBefore="r "
      />
      <MultiRangeSlider
        handleClear={() => handleClear("kilometers")}
        min={0}
        max={500000}
        step={10000}
        value={filters.kilometers}
        onChange={(values) => handleRangeChange("kilometers", values)}
        title="kilometers"
        textAfter=" km"
      />
      <MultiRangeSlider
        handleClear={() => handleClear("year")}
        min={2007}
        max={2025}
        step={1}
        value={filters.year}
        onChange={(values) => handleRangeChange("year", values)}
        title="year"
      />
    </div>
  );
}
