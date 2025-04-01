import {getAllCars} from "@/api/cars";

import ShowroomView from "@/views/Showroom/ShowroomView";

export default async function Showroom() {
  const data = await getAllCars();

  //@ts-expect-error
  const transformData = data.map(({_id, mainImage, year, make, model, price, km, transmission, type, fuel}) => ({
    id: _id,
    img: mainImage,
    year: Number(year),
    make,
    model,
    price: `R ${price}`,
    mileage: `${km}`,
    km: Number(km),
    transmission,
    href: `/showroom/${_id}`,
    type,
    fuel,
  }));

  return <ShowroomView data={transformData} />;
}
