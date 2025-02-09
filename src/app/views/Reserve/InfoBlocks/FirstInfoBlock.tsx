"use client"
import Image from "next/image";
import Button from "@/shared/components/Buttons/Button/Button";
import cls from "./styles.module.scss";

export default function FirstInfoBlock({ price }: { price: string }) {
  return (
    <div className={cls.info}>
      <div className={cls.txtBlock}>
        <h3>{price}</h3>
        <h6>including vat</h6>
      </div>
      <div className={cls.txtBlock}>
        <Image
          src="/icons/reserve/svg1.svg"
          alt="icon"
          width={32}
          height={32}
        />
        <h4 style={{ color: "var(--purple)" }}>
          Pay&nbsp;R&nbsp;5,000&nbsp;to reserve this vehicle
        </h4>
      </div>
      <p className="textMedium">
        pay&nbsp;yR&nbsp;5,000&nbsp;to reserve this vehicle secure your dream
        car by placing a small, non-refundable deposit online. this ensures the
        vehicle is held for you until youʼre ready to inspect it in person or
        online
      </p>
      <div className={cls.btnsWrapp}>
        <Button
          text="pay with ozow"
          img="/icons/reserve/svg2.svg"
          onClick={() => {
            console.log("🥂");
          }}
        />
        <Button
          text="credit or debit card"
          color="transparent"
          onClick={() => {
            console.log("🥂");
          }}
        />
      </div>
    </div>
  );
}
