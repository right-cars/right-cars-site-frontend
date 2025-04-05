import {getAllCars} from "@/api/cars";

import ShowroomView from "@/views/Showroom/ShowroomView";

export default async function Showroom() {
  const data = await getAllCars();

  //@ts-expect-error
  const transformData = data.map(({_id, imageUrls, year, make, model, price, mileageInKm, transmission, vehicleCategory, fuelType}) => ({
    id: _id,
    img: imageUrls[0],
    year: Number(year),
    make,
    model,
    price: `R ${price}`,
    mileage: mileageInKm,
    km: Number(mileageInKm),
    transmission,
    href: `/showroom/${_id}`,
    type: vehicleCategory,
    fuel: fuelType,
  }));

  return <ShowroomView data={transformData} />;
}
