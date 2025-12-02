import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

interface SecondInfoProps {
  price: string;
  pageId: string;
  setIsCarInfoShown: Dispatch<SetStateAction<boolean>>;
}

function getTimeLeft(endDate: string, endTime: string) {
  // создаём объект даты
  const target = new Date(`${endDate}T${endTime}`);
  const now = new Date();
  //@ts-expect-error
  const diff = target - now;

  if (diff <= 0) return "00h 00m 00s";

  const totalSeconds = Math.floor(diff / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // форматирование с ведущими нулями
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");

  return `${h}h ${m}m ${s}s`;
}

export default function SecondInfoBlock({
  //@ts-expect-error
  auction,
  // pageId,
  // setIsCarInfoShown,
}: SecondInfoProps) {
  return (
    <>
     <div className={cls.auctionInfo}>
        <div className={cls.auctionInfoBlock}>
          <p className={cls.auctionInfoBlockTitle}>current bid</p>
          <p className={cls.auctionInfoBlockValue}>R {auction.currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
         <div className={cls.auctionInfoBlock}>
          <p className={cls.auctionInfoBlockTitle}>time left</p>
          <p className={cls.auctionInfoBlockValue}>{getTimeLeft(auction.endDate, auction.endTime)}</p>
        </div>
      </div>
      <div className={cls.infoBlock}>
      {/* <div className={cls.secondTitleBlock}>
        <p className="titleMedium">
          R {Number(price.split(",")[0]).toLocaleString("en-US")}
        </p>
        <p className="textMedium">including vat</p>
      </div> */}
      <div className={cls.brnsWrapp}>
        <div className={cls.priceWrapper}>
          <Button text="+ R 500" color="transparent" />
          <Button text="+ R 1000" color="transparent" />
          <Button text="+ R 2000" color="transparent" />
        </div>
        <Button
          // onClick={() => setIsCarInfoShown(false)}
          text="place bid"
          img="/icons/endContent.svg"
        />
        {/* <Link href={`/showroom/${pageId}/finance`}>
          
        </Link> */}
      </div>
    </div>
    </>
  );
}
