"use client";

import {useState, useEffect} from "react";
import Link from "next/link";

// import { CarProps } from "@/shared/types/car";
import Button from "@/shared/components/Buttons/Button/Button";
import CarCard from "@/shared/components/CarCard/CarCard";

import Slider from "./Slider";

import {getNewestCars} from "@/api/cars";

import cls from "./styles.module.scss";

interface CarListProps{
  title: string;
  // carsData: CarProps[]
}

export default function CarListWithSlider({title }:CarListProps) {
    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async()=> {
            try {
                const result = await getNewestCars();
                setData(result);
            }
            catch(error) {
                //@ts-expect-error
                console.log(error?.message);
            }
        }

        fetchData();

    }, []);

  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
      </div>

      <Slider data={data} />

      <div className={cls.mobGallery}>
        {data.slice(0, 3).map(
          ({
            // href,
            img,
            year,
            make,
            model,
            price,
            mileage,
            transmission,
            id,
          }) => (
            <CarCard
              key={id}
              // href={href}
              href={`/showroom/${id}`}
              img={img}
              year={year}
              price={price}
              mileage={mileage}
              make={make}
              model={model}
              transmission={transmission}
              id={id}
            />
          )
        )}
      </div>

      <div className="container">
        <Link href="/showroom" className={cls.btnWrapp}>
          <Button text="view all vehicles" />
        </Link>
      </div>
    </section>
  );
}
