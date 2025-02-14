import Link from "next/link";
import { CarProps } from "@/shared/types/car";
import Button from "@/shared/components/Buttons/Button/Button";
import CarCard from "@/shared/components/CarCard/CarCard";
import Slider from "./Slider";
import cls from "./styles.module.scss";

interface CarListProps{
  title: string;
  carsData: CarProps[]
}

export default function CarListWithSlider({title, carsData }:CarListProps) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
      </div>

      <Slider data={carsData} />

      <div className={cls.mobGallery}>
        {carsData.slice(0, 3).map(
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
