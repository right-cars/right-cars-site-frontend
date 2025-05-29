import { Dispatch, SetStateAction } from "react";
import FirstInfoBlock from "./FirstInfoBlock";
import SecondInfoBlock from "./SecondInfoBlock";
// import { temporaryData } from "./temporaryData";

import cls from "./styles.module.scss";

//@ts-expect-error
export default function CarInfo({data, pageId, setIsCarInfoShown}: {
  pageId: string;
  setIsCarInfoShown: Dispatch<SetStateAction<boolean>>;
}) {
  // const data = temporaryData;
  const details = [
    {
      img: "/icons/car-page/details/img1.svg",
      title: "Mileage",
      value: `${data.mileageInKm} km`,
    },
    {
      img: "/icons/car-page/details/img2.svg",
      title: "Transmission",
      value: data.transmission,
    },
    {
      img: "/icons/car-page/details/img3.svg",
      title: "Engine cap",
      value: data.engineCapacity,
    },
    {
      img: "/icons/car-page/details/img6.svg",
      title: "Fuel",
      value: data.fuelType,
    },
  ];

  if (data.fuelConsumption) {
    details.push({
      img: "/icons/car-page/details/img4.svg",
      title: "Consumption",
      value: data.fuelConsumption,
    });
  }
  if (data.driveType) {
    details.push({
      img: "/icons/car-page/details/img5.svg",
      title: "Drive type",
      value: data.driveType,
    });
  }

  return (
    <div className={cls.wrapper}>
      <FirstInfoBlock
        year={data.year}
        make={data.make}
        model={data.model}
        variant={data.variant}
        details={details}
      />
      <SecondInfoBlock price={data.price} pageId={pageId} setIsCarInfoShown={setIsCarInfoShown}/>
    </div>
  );
}
