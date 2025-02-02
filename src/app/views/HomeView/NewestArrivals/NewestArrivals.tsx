import Link from "next/link";
import Button from "@/shared/components/Button/Button";
import CarCard from "@/shared/components/CarCard/CarCard";
import { temporaryData } from "./temporaryData";
import cls from "./styles.module.scss";

export default function NewestArrivals() {
  return (
    <section className="section">
      <div className="container">
        <h2>Discover Our Newest Arrivals!</h2>
      </div>
      <div className={cls.slider}>
        {temporaryData.map(
          (
            { href, img, year, make, model, price, mileage, transmission, id }
          ) => (
            <CarCard
              key={id}
              href={href}
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
