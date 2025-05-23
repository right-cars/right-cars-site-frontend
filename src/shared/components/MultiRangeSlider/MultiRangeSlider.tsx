"use client";

import { useRef, useEffect } from "react";

import ClearBtn from "@/shared/components/Buttons/ClearBtn/ClearBtn";

import cls from "./styles.module.scss";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (values: { min: number; max: number }) => void;
  title: string;
  step?: number;
  textBeforeLeft?: string;
  textBeforeRight?: string;
  textAfter?: string;
  handleClear: () => void;
}

export default function MultiRangeSlider({
  min,
  max,
  value,
  onChange,
  title,
  textBeforeLeft,
  textBeforeRight,
  textAfter,
  step,
  handleClear,
}: MultiRangeSliderProps) {
  const range = useRef<HTMLDivElement | null>(null);

  // Convert to percentage
  const getPercent = (val: number) =>
    Math.round(((val - min) / (max - min)) * 100);

  const getGradient = () => {
    const minPercent = getPercent(value.min);
    const maxPercent = getPercent(value.max);
    return `linear-gradient(to right, #D4D4D8 ${minPercent}%, #5120B8 ${minPercent}%, #5120B8 ${maxPercent}%, #D4D4D8 ${maxPercent}%)`;
  };

  useEffect(() => {
    if (range.current) {
      const minPercent = getPercent(value.min);
      const maxPercent = getPercent(value.max);
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [value, getPercent]);

  return (
    <div>
      <div className={cls.titleAndBtnWrapp}>
        <h5 className={`${"titleTiny"} ${cls.title}`}>{title}</h5>
        {(value.min !== min || value.max !== max) && (
          <ClearBtn handleClear={handleClear} />
        )}
      </div>

      <div className={cls.range}>
        <input
          step={step}
          type="range"
          min={min}
          max={max}
          value={value.min}
          onChange={(e) =>
            onChange({
              min: Math.min(Number(e.target.value), value.max - 1),
              max: value.max,
            })
          }
          className={`${cls.input} ${cls.inputLeft}`}
          style={{
            zIndex: value.min > max - 100 ? 1 : "auto",
            background: getGradient(),
          }}
        />

        <input
          step={step}
          type="range"
          min={min}
          max={max}
          value={value.max}
          onChange={(e) =>
            onChange({
              min: value.min,
              max: Math.max(Number(e.target.value), value.min + 1),
            })
          }
          className={`${cls.input} ${cls.inputRight}`}
          style={{ background: getGradient() }}
        />

        <div className={cls.slider}>
          <div className={cls.sliderTrack} />
          <div ref={range} className={cls.sliderRange} />
          <div className={`${"textSmall"} ${cls.sliderLeftValue}`}>
            {textBeforeLeft && textBeforeLeft} {value.min}{" "}
            {textAfter && textAfter}
          </div>
          <div className={`${"textSmall"} ${cls.sliderRightValue}`}>
            {textBeforeRight && textBeforeRight} {value.max}{" "}
            {textAfter && textAfter}
          </div>
        </div>
      </div>
    </div>
  );
}
