import FirstInfoBlock from "./FirstInfoBlock";
import SecondInfoBlock from "./SecondInfoBlock";
 // import { temporaryData } from "./temporaryData";

import cls from "./styles.module.scss";

//@ts-expect-error
export default function CarInfo({ data, pageId }: { pageId: string }) {
  // const data = temporaryData;
   const details = [
       {
           img:"/icons/car-page/details/img1.svg",
           title: "Mileage",
           value: `${data.km} km`
       },
       {
           img:"/icons/car-page/details/img2.svg",
           title: "Transmission",
           value: data.transmission,
       },
       {
           img:"/icons/car-page/details/img3.svg",
           title: "Engine cap",
           value: data.engine_capacity
       },
       {
           img:"/icons/car-page/details/img4.svg",
           title: "Consumption",
           value: data.fuel_consumption
       },
       {
           img:"/icons/car-page/details/img5.svg",
           title: "Drive type",
           value: data.drive_type
       },
       {
           img:"/icons/car-page/details/img6.svg",
           title: "Fuel",
           value: data.fuel
       }
   ];

  return (
    <div className={cls.wrapper}>
      <FirstInfoBlock
        year={data.year}
        variant={data.variant}
        details={details}
      />
      <SecondInfoBlock price={data.price} pageId={pageId} />
    </div>
  );
}
