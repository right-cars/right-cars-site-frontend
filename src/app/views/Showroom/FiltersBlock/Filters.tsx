import { useState, useCallback } from "react";
import Button from "@/shared/components/Buttons/Button/Button";
import MultiRangeSlider from "@/shared/components/MultiRangeSlider/MultiRangeSlider";
import MakeFilter from "./MakeFilter/MakeFilter";
import SelectFilter from "./SelectFilter/SelectFilter";
import cls from "./styles.module.scss";

interface FilterProps{
setIsFilterVisible: (visible: boolean) => void;
  isTablet: boolean
}

const defaultMultirangeValues = {
  price: { min: 30000, max: 230000 },
  kilometers: { min: 0, max: 500000 },
  year: { min: 2007, max: 2025 },
};

const makes = ["audi", "bmw", "chevrolet", "citroen", "daihatsu", "nissan"];

export default function Filters({ setIsFilterVisible, isTablet }:FilterProps) {
  const [multirangeValues, setMultirangeValues] = useState(
    defaultMultirangeValues
  );
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>(
    []
  );
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const toggleSelectFilter = (filter: string) => {
    setOpenFilter((prev) => (prev === filter ? null : filter));
  };

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

  const handleClearAll = () => {
    setMultirangeValues(defaultMultirangeValues);
    setSelectedMakes([]);
    setSelectedFuelTypes([]);
    setSelectedTransmission([]);
    setOpenFilter(null);

    if (isTablet) setIsFilterVisible(false);
  };

  return (
    <div className={cls.container}>
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
          options={["manual", "automat"]}
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
          <Button text="apply filters" onClick={()=>{setIsFilterVisible(false)}}/>
        </div>
      </div>
    </div>
  );
}
