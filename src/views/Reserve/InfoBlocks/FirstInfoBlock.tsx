"use client"
import { useState } from 'react'
import Image from "next/image";
import axios from 'axios';

import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

export default function FirstInfoBlock({ price }: { price: string }) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setLoading(true);
            const payload = {
                amount: 1.0,
                reference: 'ORDER456',
                buyerEmail: 'test@example.com',
                returnUrl: 'https://right-cars.co.za/success',
                cancelUrl: 'https://right-cars.co.za/cancel',
                notifyUrl: 'https://right-cars.co.za/api/ozow-notify',
            };
            const {data} = await axios.post("/api/create-ozow-payment", payload);
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl
            } else {
                console.log(data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
    <div className={cls.info}>
      <div className={cls.txtBlock}>
        <p className="titleMedium">{price}</p>
        <p className="text">including vat</p>
      </div>
      <div className={cls.txtBlock}>
        <Image
          src="/icons/reserve/svg1.svg"
          alt="icon"
          width={32}
          height={32}
        />
        <p className="titleSmall" style={{ color: "#5120B8" }}>
          Pay&nbsp;R&nbsp;5,000&nbsp;to reserve this vehicle
        </p>
      </div>
      <p className="textMedium">
        pay&nbsp;yR&nbsp;5,000&nbsp;to reserve this vehicle secure your dream
        car by placing a small, non-refundable deposit online. this ensures the
        vehicle is held for you until youʼre ready to inspect it in person or
        online
      </p>
      <div className={cls.btnsWrapp}>
        <Button
            onClick={handlePayment}
          text={loading ? 'Redirecting…' : 'pay with ozow'}
          img="/icons/reserve/svg2.svg"

        />
        {/*<Button*/}
        {/*  text="credit or debit card"*/}
        {/*  color="transparent"*/}
        {/*  onClick={() => {*/}
        {/*    console.log("🥂");*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
