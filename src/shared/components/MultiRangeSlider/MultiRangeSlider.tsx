import { useRef, useEffect, useCallback } from "react";
import ClearBtn from "../Buttons/ClearBtn/ClearBtn";
import cls from "./styles.module.scss";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (values: { min: number; max: number }) => void;
  title: string;
  step?: number;
  textBefore?: string;
  textAfter?: string;
  handleClear: () => void;
}

export default function MultiRangeSlider({
  min,
  max,
  value,
  onChange,
  title,
  textBefore,
  textAfter,
  step,
  handleClear,
}: MultiRangeSliderProps) {
  const range = useRef<HTMLDivElement | null>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (val: number) => Math.round(((val - min) / (max - min)) * 100),
    [min, max]
  );

  const getGradient = useCallback(() => {
    const minPercent = getPercent(value.min);
    const maxPercent = getPercent(value.max);
    return `linear-gradient(to right, #D4D4D8 ${minPercent}%, #5120B8 ${minPercent}%, #5120B8 ${maxPercent}%, #D4D4D8 ${maxPercent}%)`;
  }, [value, getPercent]);

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
        <h5 className={cls.title}>{title}</h5>
        {(value.min !== min || value.max !== max) && (
         <ClearBtn handleClear={handleClear}/>
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
            {textBefore && textBefore} {value.min} {textAfter && textAfter}
          </div>
          <div className={`${"textSmall"} ${cls.sliderRightValue}`}>
            {textBefore && textBefore} {value.max} {textAfter && textAfter}
          </div>
        </div>
      </div>
    </div>
  );
}
