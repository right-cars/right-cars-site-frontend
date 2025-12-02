import Image from "next/image";
import Link from "next/link";

// import { CarProps } from "@/shared/types/car";
// import FavoriteBtn from "@/shared/components/Buttons/FavoriteBtn/FavoriteBtn";
import Button from "@/shared/components/Buttons/Button/Button";

import ArrowIcon from "@icons/home/car-card/arrow.svg";
import BidIcon from "@icons/home/car-card/bid.svg";
import TimeIcon from "@icons/home/car-card/time.svg";

import cls from "./styles.module.scss";

//@ts-expect-error
export default function AuctionCard(props) {
  const { href, img, year, name, currentBid, km, transmission, endDate, endTime,} = props;

  return (
    <div className={cls.wrapp}>
      {/* <FavoriteBtn
        id={id}
        reserved={reserved}
        onRemoveFavorite={onRemoveFavorite}
      /> */}
      <Link href={href}>
        <div className={cls.imgBlock}>
          <Image
            src={img}
            alt={name}
            width={336}
            height={204}
            className={cls.img}
            unoptimized
          />
        </div>
        <div className={cls.firstInfo}>
          <p className="titleSmall">{year}</p>
          <div className={cls.modelWrap}>
            <p className={`btnText ${cls.title}`}>
              {name}
            </p>
            <ArrowIcon width={18} height={18} className={cls.arr} />
          </div>
        </div>
        <div className={cls.secondInfo}>
        <div className={cls.auctionInfo}>
          <div className={cls.column}>
            <div className={cls.row}>
              <span className={cls.label}>CURRENT BID</span>
              <BidIcon className={cls.icon} />
            </div>
            <span className={cls.value}>
              {currentBid === null
                ? "no bids yet"
                : `R ${Number(currentBid.split(",")[0]).toLocaleString("en-US")}`}
            </span>
          </div>

          <div className={cls.column}>
            <div className={cls.rowRight}>
              <span className={cls.label}>ENDS ON</span>
              <TimeIcon className={cls.icon} />
            </div>
            <span className={cls.value2}>{`${endDate.slice(5)} ${endTime.slice(0, 5)}`}</span>
          </div>
        </div>

          <ul className={cls.chips}>
            <li className={cls.chip}>
              <p className="textSmall">{km}km</p>
            </li>
            <li className={cls.chip}>
              <p className="textSmall">{transmission}</p>
            </li>
          </ul>
          <Button text="make a pre-bid" img="/icons/endContent.svg" />
        </div>
      </Link>
    </div>
  );
}
