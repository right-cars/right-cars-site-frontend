import cls from "./styles.module.scss";
import MultiRangeSlider from "@/shared/components/MultiRangeSlider/MultiRangeSlider";
import { useState, useCallback } from "react";
import MakeFilter from "./MakeFilter/MakeFilter";

const defaultMultirangeValues = {
  price: { min: 30000, max: 230000 },
  kilometers: { min: 0, max: 500000 },
  year: { min: 1990, max: 2024 },
};

const makes = ["audi", "bmw", "chevrolet", "citroen", "daihatsu", "nissan"];

export default function Filters() {
  const [multirangeValues, setMultirangeValues] = useState(
    defaultMultirangeValues
  );
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);

  const handleRangeChange = useCallback(
    (
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
    },
    []
  );

  const handleClear = useCallback(
    (multirangeKey: keyof typeof multirangeValues) => {
      setMultirangeValues((prev) => ({
        ...prev,
        [multirangeKey]: defaultMultirangeValues[multirangeKey],
      }));
    },
    []
  );

  return (
    <div className={cls.filtersWrapp}>
      <MultiRangeSlider
        handleClear={() => handleClear("price")}
        min={30000}
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
        min={2007}
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
    </div>
  );
}
