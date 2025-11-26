"use client"

import { useState } from "react";
import Image from "next/image";

import { UploadTooltipType } from "@/shared/types/uploadTooltipType";

import CloseSvg from "@icons/close.svg";

import { tooltipList } from "./tooltipList";
import cls from "./styles.module.scss";

interface TooltipProps {
  tooltipVariant?: UploadTooltipType;
}

export default function Tooltip({ tooltipVariant }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowTooltip((prev) => !prev)}
        aria-label="Show tooltip"
      >
        <Image
          src="/icons/info-circle.svg"
          alt="info icon"
          width={24}
          height={24}
        />
      </button>
      {showTooltip && (
        <div className={cls.tooltipWrapp}>
          <div className={cls.tooltipTitleBlock}>
            {tooltipVariant === "withList" ? (
              <p className="text">What is accepted as proof of address?</p>
            ) : (
              <p className="text">
                A letter that is written and signed by the person whose address
                was uploaded, acknowledging that you are a resident of the same
                address
              </p>
            )}
            <button
              onClick={() => {
                setShowTooltip(false);
              }}
              className={cls.closeBtn}
            >
              <CloseSvg className={cls.closeSvg} />
            </button>
          </div>
          {tooltipVariant === "withList" && (
            <ul className={cls.tooltipList}>
              {tooltipList.map((item, index) => (
                <li key={index} className="textSmall">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
