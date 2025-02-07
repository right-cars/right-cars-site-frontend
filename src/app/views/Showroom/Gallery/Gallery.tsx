import { CarProps } from "@/shared/types/car";
import CarCard from "@/shared/components/CarCard/CarCard";
import cls from "./styles.module.scss";

interface GalleryProps {
  data: CarProps[];
}

export default function Gallery({ data }: GalleryProps) {
  return (
    <div className={cls.gallery}>
      {data.map(
        ({
          id,
          img,
          year,
          make,
          model,
          price,
          mileage,
          transmission,
          // href,
          reserved
        }) => (
          <CarCard
            key={id}
            id={id}
            img={img}
            year={year}
            make={make}
            model={model}
            price={price}
            mileage={mileage}
            transmission={transmission}
            // href={href}
            href={`/showroom/${id}`}
            reserved={reserved}
          />
        )
      )}
    </div>
  );
}
