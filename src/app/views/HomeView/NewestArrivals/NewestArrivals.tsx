import Link from "next/link";
import Button from "@/shared/components/Buttons/Button/Button";
import CarCard from "@/shared/components/CarCard/CarCard";
import { temporaryData } from "./temporaryData";
import cls from "./styles.module.scss";
import Slider from "./Slider";

export default function NewestArrivals() {
  return (
    <section className="section">
      <div className="container">
        <h2>Discover Our Newest Arrivals!</h2>
      </div>

      <Slider data={temporaryData} />

      <div className={cls.mobGallery}>
        {temporaryData.slice(0, 3).map(
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
