import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

interface SecondInfoProps {
  price: string;
  pageId: string;
  setIsCarInfoShown: Dispatch<SetStateAction<boolean>>;
}

export default function SecondInfoBlock({
  price,
  pageId,
  setIsCarInfoShown,
}: SecondInfoProps) {
  return (
    <div className={cls.infoBlock}>
      <div className={cls.secondTitleBlock}>
        <p className="titleMedium">
          R {Number(price.split(",")[0]).toLocaleString("en-US")}
        </p>
        <p className="textMedium">including vat</p>
      </div>
      <div className={cls.brnsWrapp}>
        <Button
          onClick={() => setIsCarInfoShown(false)}
          text="reserve now"
          img="/icons/endContent.svg"
        />

        <Link href={`/showroom/${pageId}/finance`}>
          <Button text="get finance" color="transparent" />
        </Link>
      </div>
    </div>
  );
}
